import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Texas Ticket Monster | Fight Your Texas Tickets",
  description: "Upload your Texas traffic ticket, pay per ticket, and let our attorneys handle the rest. No court appearances needed. DUI, speeding, and more.",
  keywords: "Texas traffic ticket, fight ticket, DUI defense, speeding ticket, traffic lawyer Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
