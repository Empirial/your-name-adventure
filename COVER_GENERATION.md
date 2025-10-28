# Personalized Cover Generation

This project includes a Supabase Edge Function that generates personalized book covers by overlaying a child's name onto a base cover image.

## Architecture

### Edge Function: `generate-cover`

**Location:** Deployed as a Supabase Edge Function
**Endpoint:** `POST /functions/v1/generate-cover`

#### Request Format

```json
{
  "name": "Emma"
}
```

#### Response Format

```json
{
  "success": true,
  "baseImageUrl": "https://[project].supabase.co/storage/v1/object/public/assets/Cover_Page.png",
  "name": "EMMA",
  "textPosition": {
    "x": 512,
    "y": 430
  },
  "textStyle": {
    "fontSize": 80,
    "color": "#6A4A8A",
    "strokeColor": "#FFFFFF",
    "strokeWidth": 3,
    "fontFamily": "Arial, sans-serif",
    "fontWeight": "bold"
  }
}
```

The edge function returns configuration data instead of generating the image server-side. This approach:
- Avoids compatibility issues with image processing libraries in Deno Deploy
- Allows for real-time rendering on the client
- Reduces server load and improves response times

### Client-Side Component: `PersonalizedCover`

**Location:** `src/components/PersonalizedCover.tsx`

This React component:
1. Calls the edge function to get cover configuration
2. Loads the base cover image
3. Uses HTML5 Canvas API to render the personalized name
4. Displays the final result

#### Usage

```tsx
import { PersonalizedCover } from "@/components/PersonalizedCover";

<PersonalizedCover
  name="Emma"
  className="w-full h-auto"
  onError={(error) => console.error(error)}
/>
```

## Storage Setup

### Assets Bucket

A public Supabase Storage bucket named `assets` contains:

- **Cover_Page.png** - The base cover image (1024x1024px)
- **font.ttf** (optional) - Custom font file for text rendering

### Bucket Configuration

- **Public access:** Enabled for reading
- **File size limit:** 10 MB
- **Allowed MIME types:**
  - `image/png`
  - `image/jpeg`
  - `image/jpg`
  - `font/ttf`
  - `application/x-font-ttf`
  - `application/octet-stream`

## Text Positioning

The name is rendered at coordinates calculated to center it over the crystal heart on the cover image:

- **X position:** Center of image (width / 2)
- **Y position:** 42% from top (height * 0.42)

These coordinates can be adjusted in the edge function if needed.

## Customization

### Adjusting Text Position

Edit the edge function to change text placement:

```typescript
textPosition: {
  x: 512,  // Horizontal center
  y: 430,  // Vertical position (adjust as needed)
}
```

### Changing Text Style

Modify the `textStyle` object in the edge function:

```typescript
textStyle: {
  fontSize: Math.min(80, 600 / nameText.length),  // Scales with name length
  color: "#6A4A8A",           // Purple
  strokeColor: "#FFFFFF",     // White outline
  strokeWidth: 3,
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
}
```

### Using a Custom Font

1. Upload your `.ttf` font file to the `assets` bucket
2. Update the `fontFamily` in the edge function response
3. Load the font in your CSS using `@font-face`

## Error Handling

The component handles:
- Network failures
- Missing or invalid cover images
- Edge function errors
- Canvas rendering issues

Errors are displayed to the user with appropriate messages and can be captured via the `onError` callback.

## Performance Considerations

- Cover configuration is cached for 1 hour
- Client-side rendering happens once per component mount
- Canvas element can be converted to blob/dataURL for downloads if needed

## Future Enhancements

Potential improvements:
- Server-side image generation once stable libraries are available for Deno Deploy
- Support for custom background colors/gradients
- Multiple text position presets (top, center, bottom)
- Font customization per user
- Download functionality for generated covers
