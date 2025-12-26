# Internationalization for Error & Fallback Pages

## Summary
All error handling and fallback pages have been updated to use proper internationalization (i18n) instead of hardcoded text.

## Changes Made

### 1. Translation Files Updated
Added new translation keys to both `src/messages/en.json` and `src/messages/es.json`:

#### New Translation Sections:
- **`notFound`**: Translations for 404 pages
  - title, heading, description
  - goHome, uploadTickets
  - howItWorksTitle/Desc, faqTitle/Desc, contactTitle/Desc
  - monsterNotFound

- **`error`**: Translations for error boundaries
  - title, heading, description
  - pageError, pageErrorDesc
  - tryAgain, goHome

- **`loading`**: Translation for loading state
  - text

### 2. Locale-Specific Pages Updated

#### `src/app/[locale]/not-found.tsx`
- ✅ Now uses `useTranslations('notFound')`
- ✅ All hardcoded text replaced with translation keys
- ✅ Removed unused imports (Search icon, tNav variable)
- ✅ Fully supports EN/ES based on route locale

#### `src/app/[locale]/error.tsx`
- ✅ Now uses `useTranslations('error')`
- ✅ Component renamed from `Error` to `ErrorBoundary` (linter compliance)
- ✅ Props marked as `Readonly<>` (linter compliance)
- ✅ Changed `window.location.href` to `globalThis.location.href` (linter compliance)
- ✅ Fully supports EN/ES based on route locale

#### `src/app/[locale]/loading.tsx`
- ✅ Now uses `useTranslations('loading')`
- ✅ Loading text is now internationalized

### 3. Root-Level Pages Updated

**Note**: Root-level pages (`src/app/not-found.tsx` and `src/app/global-error.tsx`) cannot use `useTranslations` because they render outside the NextIntl provider context.

#### `src/app/not-found.tsx`
- ✅ Updated to show bilingual text inline (EN / ES)
- ✅ Button text includes both languages
- ✅ Provides clear navigation to `/en` and `/es` locales

#### `src/app/global-error.tsx`
- ✅ Updated to show bilingual text inline (EN / ES)
- ✅ Button text includes both languages
- ✅ Error messages displayed in both languages

## Translation Structure

### English (`en.json`)
```json
{
  "notFound": {
    "title": "404",
    "heading": "Page Not Found",
    "description": "Oops! The monster couldn't find this page...",
    "goHome": "Go Home",
    "uploadTickets": "Upload Tickets",
    ...
  },
  "error": {
    "title": "Oops!",
    "heading": "Something Went Wrong",
    "pageError": "Something Went Wrong",
    "pageErrorDesc": "The monster encountered an error...",
    "tryAgain": "Try Again",
    "goHome": "Go Home"
  },
  "loading": {
    "text": "Loading..."
  }
}
```

### Spanish (`es.json`)
```json
{
  "notFound": {
    "title": "404",
    "heading": "Página No Encontrada",
    "description": "¡Ups! El monstruo no pudo encontrar esta página...",
    "goHome": "Ir al Inicio",
    "uploadTickets": "Subir Multas",
    ...
  },
  "error": {
    "title": "¡Ups!",
    "heading": "Algo Salió Mal",
    "pageError": "Algo Salió Mal",
    "pageErrorDesc": "El monstruo encontró un error...",
    "tryAgain": "Intentar de Nuevo",
    "goHome": "Ir al Inicio"
  },
  "loading": {
    "text": "Cargando..."
  }
}
```

## Benefits
1. **Consistency**: All user-facing text follows the same i18n pattern
2. **Maintainability**: Easy to update translations in one place
3. **Scalability**: Ready for additional locales if needed
4. **Type Safety**: TypeScript ensures translation keys exist
5. **User Experience**: Users see error messages in their chosen language

## Testing Checklist
- [ ] Navigate to `/en/nonexistent` → Should show English 404
- [ ] Navigate to `/es/nonexistent` → Should show Spanish 404
- [ ] Trigger error in `/en` route → Should show English error message
- [ ] Trigger error in `/es` route → Should show Spanish error message
- [ ] Navigate to `/nonexistent` (root) → Should show bilingual 404
- [ ] Check loading states display correct locale

## Linter Status
✅ All linter errors resolved
✅ No hardcoded text warnings
✅ TypeScript strict mode compliant

