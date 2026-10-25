import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
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
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-spotlight rounded-full blur-3xl opacity-50 animate-float"
        aria-hidden="true"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-purple/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 20}
            className="absolute w-0.5 h-0.5 bg-icy-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Copy */}
          <div
            className={`transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800/60 backdrop-blur-xl border border-silver-400/10 mb-8 animate-slide-up">
              <span className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-silver-300 tracking-wider uppercase">MADE TO SHARE</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="headline-1 text-gradient mb-8 animate-slide-up animate-delay-100"
            >
              Your Sound.<br />
              <span className="text-gradient-brand">Their Sound.</span><br />
              Everyone&apos;s Sound.
            </h1>

            {/* Supporting Text */}
            <p className="body-lg max-w-xl mb-10 animate-slide-up animate-delay-200">
              Four earbuds. One shared experience. Bring your people closer to the music, movies, and moments you love.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up animate-delay-300">
              <a href="#launch" className="btn-primary w-full sm:w-auto">
                <span>Get Notified at Launch</span>
              </a>
              <a href="#big-idea" className="btn-secondary w-full sm:w-auto">
                <span>Discover the Experience</span>
              </a>
            </div>

            {/* Editorial Text at Bottom */}
            <div className="mt-16 flex flex-wrap items-center gap-6 text-sm text-silver-500 animate-slide-up animate-delay-400">
              <span className="font-medium text-silver-400 tracking-wider uppercase">A NEW WAY TO LISTEN</span>
              <div className="flex items-center gap-2">
                <span className="w-16 h-px bg-gradient-to-r from-transparent via-silver-400/30 to-transparent" />
                <span className="font-medium text-silver-400 tracking-wider uppercase">FOUR EARBUDS. ONE CASE.</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Visual */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            aria-hidden="true"
          >
            {/* Product Case Visualization */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Behind Case */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 via-transparent to-icy-blue/20 rounded-3xl blur-2xl animate-glow-pulse"
                style={{ transform: 'scale(1.2)' }}
              />

              {/* Charging Case */}
              <div className="relative w-full h-full max-w-[480px] max-h-[480px] mx-auto">
                {/* Case Body */}
                <div className="relative w-full h-full bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 rounded-3xl border border-silver-400/10 shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(168,85,247,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  {/* Top Surface with Earbuds */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-600/50 via-charcoal-800 to-charcoal-900" />

                    {/* Earbud Slots - 4 Earbuds */}
                    <div className="relative h-full flex items-center justify-center p-8">
                      <div className="flex items-center justify-center gap-4">
                        {/* Left Earbud 1 */}
                        <EarbudVisual side="left" index={1} color="electric-purple" />
                        {/* Right Earbud 1 */}
                        <EarbudVisual side="right" index={1} color="icy-blue" />
                        {/* Left Earbud 2 */}
                        <EarbudVisual side="left" index={2} color="electric-purple" />
                        {/* Right Earbud 2 */}
                        <EarbudVisual side="right" index={2} color="icy-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Case Hinge Detail */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-gradient-to-r from-charcoal-600 to-charcoal-800 rounded-t-xl border-t border-silver-400/10" />

                  {/* Charging Indicator */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                    <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                    <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
                  </div>
                </div>

                {/* Surface Reflection */}
                <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-t from-charcoal-900/30 to-transparent rounded-full blur-2xl" />
              </div>

              {/* Floating Labels */}
              <div className="absolute -top-4 -right-4 text-right animate-fade-in animate-delay-500">
                <div className="text-xs font-medium text-electric-purple/80 tracking-wider uppercase mb-1">LEFT × 2</div>
                <div className="text-xs font-medium text-icy-blue/80 tracking-wider uppercase">RIGHT × 2</div>
              </div>

              <div className="absolute -bottom-4 -left-4 animate-fade-in animate-delay-600">
                <div className="text-xs font-medium text-silver-400/60 tracking-wider uppercase">ONE CASE</div>
                <div className="text-xs font-medium text-silver-300 tracking-wider uppercase">FOUR EARBUDS</div>
              </div>
            </div>

            {/* People Sharing Visual - Below Case */}
            <div className="mt-12 relative animate-fade-in animate-delay-700">
              <SharingMomentVisual />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-silver-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

// Earbud Visual Component
function EarbudVisual({ side, index, color }) {
  const isLeft = side === 'left'
  const rotation = isLeft ? -15 : 15
  const offsetX = isLeft ? -8 : 8

  return (
    <div
      className="relative"
      style={{
        transform: `rotate(${rotation}deg) translateX(${offsetX}px)`,
        zIndex: isLeft ? 2 : 1,
      }}
    >
      {/* Earbud Body */}
      <div className="relative w-14 h-24">
        {/* Earbud Tip */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-silver-300 to-silver-500 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]" />

        {/* Earbud Stem */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-14 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-b-lg border-l border-silver-400/10 border-r border-silver-400/10" />

        {/* Earbud Body/Main */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-full border border-silver-400/10 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center">
          {/* Touch Surface / LED */}
          <div className={`w-4 h-4 rounded-full bg-gradient-to-br from-${color} to-${color}-light opacity-80 shadow-[0_0_10px_rgba(168,85,247,0.5)]`} />
        </div>
      </div>

      {/* Magnetic Charging Contacts */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5">
        <div className="w-1 h-1.5 bg-silver-400/50 rounded-t" />
        <div className="w-1 h-1.5 bg-silver-400/50 rounded-t" />
      </div>
    </div>
  )
}

// Sharing Moment Visual - People using earbuds together
function SharingMomentVisual() {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Silhouette/Illustration of 4 people sharing a moment */}
      <div className="relative h-48 bg-gradient-to-b from-charcoal-800/50 to-transparent rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-center gap-4 px-8 pb-6">
          {/* Person 1 */}
          <PersonSilhouette color="electric-purple" delay={0} />
          {/* Person 2 */}
          <PersonSilhouette color="icy-blue" delay={100} />
          {/* Person 3 */}
          <PersonSilhouette color="electric-purple" delay={200} />
          {/* Person 4 */}
          <PersonSilhouette color="icy-blue" delay={300} />
        </div>

        {/* Connecting Sound Waves */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end justify-center gap-1 h-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1.5 bg-gradient-to-t from-electric-purple/60 to-icy-blue/60 rounded-t"
              style={{
                height: `${30 + i * 10}px`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        {/* Shared Audio Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-charcoal-900/80 backdrop-blur-xl border border-silver-400/10 rounded-full">
          <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
          <span className="text-xs font-medium text-silver-300 tracking-wider">SHARED AUDIO ACTIVE</span>
          <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
          <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
        </div>
      </div>

      {/* Caption */}
      <p className="text-center mt-6 text-sm text-silver-500 font-medium tracking-wider uppercase">
        Four friends. One playlist. Same moment.
      </p>
    </div>
  )
}

function PersonSilhouette({ color, delay }) {
  return (
    <div
      className="relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Head with Earbud */}
      <div className="relative w-10 h-10 mx-auto">
        {/* Head Outline */}
        <div className="absolute inset-0 border-2 border-silver-400/20 rounded-full" />

        {/* Earbud on Ear */}
        <div
          className="absolute top-1"
          style={{
            left: color === 'electric-purple' ? '-4px' : 'auto',
            right: color === 'icy-blue' ? '-4px' : 'auto',
          }}
        >
          <div className="w-3 h-5 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2"
               style={{ borderColor: color }} />
        </div>

        {/* Earbud Glow */}
        <div
          className="absolute top-1 w-3 h-5 rounded-full opacity-50 blur-sm"
          style={{
            left: color === 'electric-purple' ? '-4px' : 'auto',
            right: color === 'icy-blue' ? '-4px' : 'auto',
            backgroundColor: color === 'electric-purple' ? '#a855f7' : '#06b6d4',
          }}
        />
      </div>

      {/* Shoulders */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 border-b-2 border-l-2 border-r-2 border-silver-400/20 rounded-bl-lg rounded-br-lg" />
    </div>
  )
}