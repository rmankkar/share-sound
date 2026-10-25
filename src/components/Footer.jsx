import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const currentYear = new Date().getFullYear()

  const navSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#product' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Use Cases', href: '#use-cases' },
        { label: 'Specifications', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Shipping', href: '#' },
        { label: 'Returns', href: '#' },
        { label: 'Warranty', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { label: 'Twitter', href: '#', icon: <TwitterIcon /> },
    { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
    { label: 'YouTube', href: '#', icon: <YouTubeIcon /> },
    { label: 'Discord', href: '#', icon: <DiscordIcon /> },
  ]

  return (
    <footer
      ref={sectionRef}
      className="relative border-t border-silver-400/10"
      aria-labelledby="footer-title"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-charcoal-800/50" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-electric-purple/10 to-icy-blue/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 transition-all duration-800 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
            <a href="#hero" className="flex items-center gap-2 text-silver-100 font-display font-bold text-2xl lg:text-3xl tracking-tight mb-6" aria-label="SYNC - Home">
              <span className="relative">
                SYNC
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-purple to-icy-blue rounded-full" />
              </span>
            </a>

            <p className="body-md max-w-xs mb-8" style={{ animationDelay: '100ms' }}>
              Sound brings us together.
            </p>

            <p className="body-sm max-w-xs text-silver-500" style={{ animationDelay: '200ms' }}>
              The first charging case designed for shared listening. Four earbuds. One case. Every moment better together.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4" style={{ animationDelay: '300ms' }} role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-charcoal-800/50 border border-silver-400/10 flex items-center justify-center text-silver-400 hover:text-silver-100 hover:border-electric-purple/50 hover:bg-electric-purple/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {navSections.map((section, sectionIndex) => (
              <nav
                key={section.title}
                className="transition-all duration-800 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
                style={{ animationDelay: `${400 + sectionIndex * 100}ms` }}
                aria-label={section.title}
              >
                <h3 className="text-sm font-semibold text-silver-100 tracking-wider uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3" role="list">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-silver-400 hover:text-silver-100 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        {link.label}
                        <span className="w-0 h-0.5 bg-gradient-to-r from-electric-purple to-icy-blue transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 lg:mt-20 transition-all duration-800 ease-out ${visible ? 'opacity-100' : 'opacity-0'}" style={{ animationDelay: '800ms' }}>
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-electric-purple to-icy-blue" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-800 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}" style={{ animationDelay: '900ms' }}>
          {/* Copyright */}
          <p className="text-sm text-silver-500 text-center sm:text-left">
            &copy; {currentYear} SYNC. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-sm text-silver-500 text-center sm:text-right flex items-center justify-center sm:justify-end gap-1">
            Designed for
            <span className="text-electric-purple font-medium">shared moments</span>
            everywhere.
          </p>

          {/* Back to Top */}
          <a
            href="#hero"
            className="w-10 h-10 rounded-xl bg-charcoal-800/50 border border-silver-400/10 flex items-center justify-center text-silver-400 hover:text-silver-100 hover:border-electric-purple/50 hover:bg-electric-purple/10 transition-all duration-300 mx-auto sm:mx-0"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

// Social Icons
function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.471 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.675 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.992 5.492.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 .73-.277c.184.26.372.51.565.752a13.95 13.95 0 0 0 1.774-.547.061.061 0 0 0 .018-.078 10.07 10.07 0 0 0 .297-.984.07.07 0 0 0-.012-.117c-.559-.33-.993-.852-1.237-1.467a12.11 12.11 0 0 1-.723-1.443.077.077 0 0 0-.04-.112 13.107 13.107 0 0 1-.075-.715v-.073c0-.426.083-.85.21-1.258a.077.077 0 0 0-.025-.11 15.24 15.24 0 0 0-1.292-2.28.074.074 0 0 0-.106-.013 9.33 9.33 0 0 0-.964.03.077.077 0 0 0-.05.114 10.94 10.94 0 0 0-.19 1.185.073.073 0 0 0 .02.098c.6.576 1.39 1.373 2.107 1.753a.07.07 0 0 0 .074-.007c2.09-1.427 3.97-3.59 4.705-5.224a.077.077 0 0 0-.012-.105 14.73 14.73 0 0 0-1.236-3.27.077.077 0 0 0-.124-.037c-.334.052-.677.17-1.037.323a.073.073 0 0 0-.028.095c.144.483.463.858.831 1.127a.083.083 0 0 0 .116.012 20.53 20.53 0 0 0 5.708-2.6 15.57 15.57 0 0 0 2.48-7.457.06.06 0 0 0-.042-.086zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}