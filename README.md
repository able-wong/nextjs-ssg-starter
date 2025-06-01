# nextjs-ssg-starter

A modern Next.js starter template optimized for AI-assisted static site development. Perfect for quickly building and deploying static websites with the help of AI coding assistants like GitHub Copilot.

## 🚀 Quick Start (5 minutes)

1. Clone this repository
2. Run `npm install`
3. Open in VS Code with GitHub Copilot or your preferred AI assistant
4. Start the development server: `npm run dev`
5. Open http://localhost:3000

## 🤖 Working with AI

### How to Ask AI to Create Your Site

Include README.md in context, then ask something like:

**For a Business:**
```
Create a website for Sunrise Cafe, a cozy breakfast spot in Portland.
Include:
- Welcome message and photos of the cafe
- Our menu items and prices
- Location: 123 Morning St, Portland
- Contact: 555-0123 and hello@myexample.com
```

**For a Personal Portfolio:**
```
Create a website for Alex Chen, a professional photographer.
Include:
- Introduction and what I do
- Gallery of my best work (use placeholder images)
- Services: wedding, portrait, events
- Contact: alex@myexample.com
```

**For a Community Group:**
```
Create a website for Green Valley Garden Club.
Include:
- About our community garden
- Monthly events and activities
- How to join
- Contact: garden@myexample.org
```

The AI will create a complete, professional website with all necessary sections and proper styling!

## 📋 Project Requirements

### Technical Stack
- Next.js v15.3.3 with App Router (SSG mode)
- Tailwind CSS v4.1.8
- DaisyUI v5.0.40
- TypeScript v5.8.3

### Development Rules for AI Code Assistant
1. Component Priority:
   - ✅ Use DaisyUI components first and create custom components only if no alternative
   - ✅ Prefix custom components with 'Custom' (e.g., CustomHero)
   - ❌ Never use unprefixed names that conflict with DaisyUI

2. Styling Requirements:
   - Fully responsive
   - Accessible (ARIA labels)
   - Customize color theme for DaisyUI in app/globals.css "Color theme for DaisyUI v5". Here is example:
      ```
      @plugin "daisyui/theme" {
        name: "light";
        default: true;
        --color-primary: oklch(45% 0.12 150);
        --color-primary-content: oklch(98% 0.01 150);
        --color-secondary: oklch(55% 0.15 150);
        --color-accent: oklch(75% 0.12 150);
        --color-base-100: oklch(98% 0.02 150);
        --color-base-200: oklch(95% 0.04 150);
        --color-base-300: oklch(90% 0.06 150);
      }
      ```

3. Static Site Rules:
   - ❌ No server-side operations (this is SSG only)
   - Avoid form submissions unless really needed
   - ✅ Use mailto: for email and tel: for phone links
   - ✅ In case form is really needed:
       - Mock form submissions with alert messages
       - Add Next.js 'use client' directive at the top of components that need client-side interactivity (e.g., forms, interactive UI)

4. Images Usage
   - For simple image usage, use emojis or SVG.
   - For others, such as image for hero section, use 'curl -L -o IMAGEPATHNAME https://picsum.photos/WIDTH/HEIGHT' to create placeholder images and save them under /public/images.

5. If I am asked to integrate with Google Maps
   - ❌ Never use embedded Google Maps iframes or API keys
   - ✅ Use direct links to Google Maps with encoded addresses

6. Others
   - Preserve comments that are helpful for reference to external documentation or explaining how things are implemented.

## 🛠️ Development

### Commands
```bash
npm run dev    # Start development server
npm run build  # Build static site (outputs to 'out' directory)
npm run lint   # Check code quality
```

### Building for Production
1. Build the static site:
   ```bash
   npm run build
   ```
   This generates static files in the `out` directory.

2. Test the build locally (optional):
   ```bash
   cd out
   python3 -m http.server 3000  # or python -m SimpleHTTPServer 3000 for Python 2
   ```
   Then visit http://localhost:3000

3. Deploy to any static hosting:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3
   - Any web server (Apache/Nginx)

### Project Structure
```
nextjs-ssg-starter/
├── app/                    # Next.js 15 App Router
│   ├── components/        # Reusable UI components
│   └── config/           # Site configuration
└── public/               # Static assets
```

## 🔧 Troubleshooting

### Common Issues

1. **AI Assistant Times Out**
   - Error: "Sorry, no response was returned." or "Operation timeout"
   - Solution: Tell AI code assistant to "try again"

2. **AI Assistant Iterations Exceeded**
   - Error: "Maximum number of iterations exceeded" or similar
   - Solution: Ask to retry the operation with more specific requirements
   - Example: "Let's try again, but focus on just the hero section first"

3. **Runtime Errors in Browser**
   - If you see errors in the browser console or on the page:
   - Solution: Copy the exact error message and ask the AI to help fix it
   - Example: "I'm seeing this error: [error message]. Can you help fix it?"

4. **Build Errors**
   - If `npm run build` fails:
   - Solution: Share the error output with the AI
   - The AI can help identify and fix build-time issues

### Tips for Better AI Assistance
- Keep your requests focused and specific
- Share error messages exactly as they appear
- If stuck, try rephrasing your request
- For complex features, build them step by step

## 📖 Resources
- [DaisyUI v5 Components](https://daisyui.com/docs)
- [Tailwind v4 Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
