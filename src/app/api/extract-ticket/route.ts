import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client only if API key is available
const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new OpenAI({ apiKey });
};

export async function POST(req: NextRequest) {
  try {
    // Check if API key is configured
    const openai = getOpenAIClient();
    if (!openai) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, and WebP images are supported.' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');
    const mimeType = file.type;

    // Call OpenAI Vision API
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // More cost-effective model
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are a Texas traffic ticket data extraction expert. Carefully analyze this traffic ticket image and extract all visible information. Return the data as valid JSON.

Extract these fields (use null for any field not visible or unclear):
{
  "ticketNumber": "The citation or ticket number",
  "violationType": "Type of violation (e.g., Speeding, Red Light, Stop Sign, etc.)",
  "violationDate": "Date of violation in YYYY-MM-DD format",
  "violationTime": "Time of violation",
  "location": "Full address or location where violation occurred",
  "courtDate": "Court appearance date in YYYY-MM-DD format if present",
  "courtLocation": "Court address if present",
  "fineAmount": "Fine amount as number only (no $ symbol)",
  "officerName": "Officer's name if visible",
  "officerBadge": "Officer's badge number if visible",
  "vehicleInfo": {
    "make": "Vehicle make",
    "model": "Vehicle model",
    "plate": "License plate number",
    "color": "Vehicle color"
  },
  "speedLimit": "Posted speed limit as number (for speeding tickets only)",
  "actualSpeed": "Actual speed as number (for speeding tickets only)",
  "notes": "Any other important information from the ticket"
}

Be accurate and only extract information you can clearly see. Return ONLY the JSON object, no additional text.`,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`,
                detail: "high",
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
      temperature: 0.1, // Lower temperature for more consistent extraction
    });

    const content = response.choices[0].message.content || '{}';
    
    // Parse the JSON response
    let extractedData;
    try {
      extractedData = JSON.parse(content);
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        extractedData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse AI response');
      }
    }

    return NextResponse.json({
      success: true,
      data: extractedData,
      confidence: 0.85, // Mock confidence score
    });
  } catch (error) {
    console.error('Error extracting ticket data:', error);
    
    // Handle specific OpenAI errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'OpenAI API configuration error' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to extract ticket information. Please try again or enter details manually.' },
      { status: 500 }
    );
  }
}

