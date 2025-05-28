# nextjs-ssg-starter

This is a simple Next.js project configured for static site generation (SSG) with Tailwind CSS and DaisyUI components. The project builds into static HTML, CSS, and JavaScript files that can be directly uploaded to any static hosting service like Apache or Nginx.

## Features

- Next.js 14 with App Router
- TypeScript support
- Tailwind CSS for styling
- DaisyUI components
- ESLint v8 with Next.js configuration for code quality
- Prettier for code formatting
- Static Site Generation (SSG) ready
- Responsive design
- Dark/Light theme support

## Getting Started

First, install the dependencies:

```bash
npm install
```

> **Note**: You may see some deprecation warnings during installation. These are related to ESLint v8 and its dependencies, which are required for Next.js compatibility. These warnings can be safely ignored as they don't affect the functionality of the project.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

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

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Development Tools

### Code Quality
- **ESLint v8**: Static code analysis tool configured for Next.js
  - Uses Next.js core web vitals rules
  - Includes TypeScript and React specific rules
  - Note: ESLint v9+ is not yet compatible with Next.js ESLint configuration
- **Prettier**: Code formatter for consistent style
- **EditorConfig**: Maintain consistent coding styles across editors

### Styling
- **Tailwind CSS v4**: Utility-first CSS framework
- **DaisyUI v5**: Component library built on top of Tailwind CSS
- **PostCSS**: CSS transformation tool
- **Autoprefixer**: Vendor prefix management

## Project Structure

```
nextjs-ssg-starter/
├── app/
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/            # Static assets
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── .eslintrc.json    # ESLint configuration
├── .prettierrc       # Prettier configuration
└── .editorconfig     # Editor configuration
```

## Deployment

The project is configured for static site generation. After building with `npm run build`, the contents of the `out` directory can be deployed to any static hosting service like:

- Apache Server
- Nginx
- Vercel
- Netlify
- GitHub Pages
- Any static file hosting service

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/docs)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
