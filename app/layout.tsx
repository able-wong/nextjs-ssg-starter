import './globals.css'
import type { Metadata } from 'next'
import ThemeToggle from './components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Next.js Example',
  description: 'A simple Next.js example with DaisyUI components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // add data-theme attribute to html tag to force a specific theme on page load.
  // by default (ie data-theme is not defined or empty), it will use one matching your system theme.
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <ThemeToggle />
          {children}
        </div>
      </body>
    </html>
  )
}
