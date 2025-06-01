import './globals.css'
import type { Metadata } from 'next'

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
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body>
        <div className="min-h-screen">
          <div className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">My App</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
