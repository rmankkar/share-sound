import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#big-idea', label: 'The Big Idea' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#use-cases', label: 'Moments' },
    { href: '#product', label: 'Product' },
    { href: '#launch', label: 'Launch' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal-900/90 backdrop-blur-xl border-b border-silver-400/10' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-silver-100 font-display font-bold text-xl lg:text-2xl tracking-tight"
            aria-label="SYNC - Home"
          >
            <span className="relative">
              SYNC
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-purple to-icy-blue rounded-full" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-silver-300 hover:text-silver-100 transition-colors duration-200 relative"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-purple to-icy-blue scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#launch"
              className="btn-primary text-sm px-6 py-2.5 ml-4"
            >
              <span>Get Notified</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-silver-300 hover:text-silver-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden overflow-hidden transition-all duration-300 ease-out max-h-96">
            <div className="py-6 space-y-4 border-t border-silver-400/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-lg font-medium text-silver-300 hover:text-silver-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#launch"
                className="btn-primary text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get Notified at Launch</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}