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
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="min-h-screen">
          <ThemeToggle />
          {children}
        </div>
      </body>
    </html>
  )
}
