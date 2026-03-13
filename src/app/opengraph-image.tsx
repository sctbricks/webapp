import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'SCT Bricks Logo'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <img
           // Using an absolute path or a public URL if possible, 
           // but Next.js OG images can access public folder via URL in some environments
           // Here we'll try to use the logo image. 
           // For local dev/preview, we can point to the public dir.
          src="https://sctbricks.com/images/PHOTO-2025-11-28-17-35-34-removebg-preview.png"
          alt="SCT Bricks"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            marginBottom: '40px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ 
            fontWeight: 900, 
            color: '#F97316', // brand-primary color
            letterSpacing: '-0.05em',
            fontSize: '100px',
            lineHeight: 1
          }}>
            SCT
          </span>
          <span style={{ 
            fontWeight: 300, 
            color: '#1F2937', // brand-secondary
            letterSpacing: '0.2em',
            fontSize: '40px',
            lineHeight: 1,
            marginTop: '10px'
          }}>
            BRICKS
          </span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
