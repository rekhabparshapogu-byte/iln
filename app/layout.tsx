import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'I Love Network | CCNA Academic Support',
  description: 'Academic support for European college students taking CCNA v7 modules.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 font-sans flex flex-col min-h-screen">
        
        {/* PROFESSIONAL HEADER */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center h-16 px-6">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-105 transition-all shadow-sm border border-blue-200">
                {/* Home Router SVG with 2 Antennas */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-blue-600"
                >
                  {/* Left Antenna */}
                  <path d="M7 14L5 5" />
                  {/* Right Antenna */}
                  <path d="M17 14L19 5" />
                  {/* Router Body */}
                  <rect x="3" y="14" width="18" height="6" rx="2" />
                  {/* Status LEDs */}
                  <line x1="8" y1="17" x2="8.01" y2="17" strokeWidth="2.5" />
                  <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
                  <line x1="16" y1="17" x2="16.01" y2="17" strokeWidth="2.5" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-800">
                I Love <span className="text-blue-600">Network</span>
              </span>
            </Link>

            {/* Main Navigation Area */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Module Tracks
              </Link>
              <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Instructor & Support
              </Link>
            </nav>

            {/* Action / Student Area */}
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-slate-900 hidden sm:block transition-colors">
                Contact
              </Link>
              <Link href="/#courses" className="text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                View Courses
              </Link>
            </div>

          </div>
        </header>
        
        {/* PAGE CONTENT */}
        <main className="flex-grow max-w-5xl mx-auto px-6 py-8 w-full">
          {children}
        </main>

        {/* PROFESSIONAL FOOTER */}
        <footer className="bg-white border-t border-slate-200 text-slate-500 text-sm py-8 mt-12">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p>&copy; 2026 I Love Network. All rights reserved.</p>
            <div className="space-x-6 font-medium">
              <Link href="#" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}