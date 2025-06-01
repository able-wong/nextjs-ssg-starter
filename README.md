# nextjs-ssg-starter

A modern Next.js starter template optimized for AI-assisted static site development. Perfect for quickly building and deploying static websites with the help of AI coding assistants like GitHub Copilot.

## Quick Start with AI

1. Clone this repository
2. Run `npm install`
3. Open in VS Code with GitHub Copilot or your preferred AI assistant
4. Start with a prompt like:

```
# Project Context
- Stack: Next.js SSG with Tailwind CSS v4 and DaisyUI v5
- Type: Client-side only static site
- UI Priority: Use DaisyUI components first, then Tailwind CSS
- Requirements: Must be fully responsive

# Task
Create a modern landing page for my [business/portfolio/blog] with:
1. Navigation:
   - Responsive navbar with company name
   - Section links (with mobile hamburger menu)
   - Theme toggle button
2. Content Sections:
   - Hero section with [describe what you want]
   - Features section showing [your key features]
   - About section with [your content]
   - Contact information [your contact info]
```

> Why this prompt structure?
> - Clearly states the technical stack upfront for accurate code generation
> - Establishes DaisyUI as the preferred component library
> - Ensures responsive design from the start
> - Provides a clear hierarchy for navigation and content sections

The AI will help you build your site using the pre-configured tools and components!

## Core Features

- Next.js 15.3.3 with App Router
- TypeScript support
- Tailwind CSS 4.1.8 with DaisyUI 5.0.40
- ESLint 8.56.0 with Next.js configuration
- Dark/Light theme support
- 100% Static Site Generation (SSG)
- AI-friendly project structure

## Development Workflow

1. **Setup and Development**
   ```bash
   npm install        # Install dependencies
   npm run dev       # Start development server at http://localhost:3000
   ```
   > **Note**: Ignore any deprecation warnings during installation - they're related to ESLint v8 compatibility.

2. **AI-Assisted Development**
   - Use your AI assistant to generate pages in the `app` directory
   - Ask for help with components in `app/components`
   - Request styling tweaks using Tailwind CSS
   - Get help with dark/light theme modifications

3. **Building for Production**

To build the site for production:

```bash
npm run build
```

The static files will be generated in the `out` directory, which can be deployed to any static hosting service.

### Testing the Static Build

To test the static build locally, you can use Python's built-in HTTP server:

```bash
# Navigate to the out directory
cd out

# Start Python's HTTP server (Python 3)
python3 -m http.server 3000

# Or if you're using Python 2
python -m SimpleHTTPServer 3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the static site.

## Example AI Prompts

Here are some useful prompts for common tasks:

1. **Adding New Pages**
   ```
   "Create a new page at app/about/page.tsx with a responsive layout featuring [describe your content]"
   ```

2. **Creating Components**
   ```
   "Create a reusable card component using DaisyUI that displays [describe content] with dark/light theme support"
   ```

3. **Styling Changes**
   ```
   "Update the hero section in app/page.tsx to use a gradient background and animated text with Tailwind CSS"
   ```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build static site
- `npm run start` - Preview production build
- `npm run lint` - Check code quality
- `npm run lint:fix` - Auto-fix code issues
- `npm run format` - Format code

## Technical Details

### Dependencies

#### Core
- **Next.js**: v15.3.3 - React framework with SSG support
- **React**: v18.3.1 - UI library
- **TypeScript**: v5.8.3 - Type safety

#### Styling
- **Tailwind CSS**: v4.1.8 - Utility-first CSS
- **DaisyUI**: v5.0.40 - Component library
- **PostCSS**: v8.5.3 - CSS processing
- **Autoprefixer**: v10.4.21 - Vendor prefixing

#### Development
- **ESLint**: v8.56.0 - Code quality
- **Prettier**: v3.2.5 - Code formatting
- **EditorConfig**: Editor consistency

## Deployment Options

After running `npm run build`, deploy the `out` directory to any static host:

- **Simple**: GitHub Pages, Netlify Drop
- **Advanced**: Vercel, Netlify, AWS S3
- **Self-hosted**: Apache, Nginx

Example AI prompt for deployment help:
```
"Help me deploy this static site to [platform name]. I have already run npm run build."
```

## Project Structure

```
nextjs-ssg-starter/
├── app/                    # Next.js 15 App Router
│   ├── components/        # Reusable UI components
│   │   └── ThemeToggle.tsx
│   ├── config/           # Site configuration
│   │   └── theme.ts
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
└── [Configuration files] # Various config files
```

## Additional Resources

Useful Documentation:

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4.1 Docs](https://tailwindcss.com/docs)
- [DaisyUI 5.0 Components](https://daisyui.com/docs)

For AI assistance with this template, simply describe what you want to build, and the AI will help you create it using these pre-configured tools!
