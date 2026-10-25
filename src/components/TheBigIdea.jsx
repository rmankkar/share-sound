import { useEffect, useRef, useState } from 'react'

export default function TheBigIdea() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="big-idea"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="big-idea-title"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric-purple/30 to-transparent" aria-hidden="true" />
      <div
        className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-electric-purple/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <span className="inline-block text-xs font-medium text-electric-purple tracking-wider uppercase mb-6 animate-slide-up" style={{ animationDelay: '0ms' }}>
            THE BIG IDEA
          </span>
          <h2
            id="big-idea-title"
            className="headline-2 text-gradient mb-6 animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            Why Should Listening Be a<br />
            <span className="text-gradient-brand">Solo Experience?</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            From your favourite track to a movie on a long journey, some experiences are simply better when everyone is part of the moment.
          </p>
        </div>

        {/* Comparison Visual */}
        <div className="relative">
          {/* Traditional vs New - Split Screen */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Traditional - Solo */}
            <div
              className={`relative glass-panel-strong p-8 lg:p-12 rounded-3xl overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 to-transparent opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-charcoal-900/50 border border-silver-400/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-silver-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-silver-400 tracking-wider uppercase">TRADITIONAL</span>
                    <p className="text-sm text-silver-500">One Person. One Audio.</p>
                  </div>
                </div>

                {/* Solo Visual */}
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      {/* Single Person with Earbuds */}
                      <div className="relative mx-auto mb-4" style={{ width: '120px', height: '120px' }}>
                        <div className="absolute inset-0 border-2 border-silver-400/20 rounded-full" />
                        <div className="absolute top-6 left-6 w-6 h-10 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2 border-electric-purple" />
                        <div className="absolute top-6 right-6 w-6 h-10 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2 border-electric-purple" />
                        <div className="absolute top-6 left-6 w-6 h-10 rounded-full opacity-30 blur-sm bg-electric-purple" />
                        <div className="absolute top-6 right-6 w-6 h-10 rounded-full opacity-30 blur-sm bg-electric-purple" />
                      </div>
                      <p className="text-sm text-silver-400 font-medium">Isolated Listening</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-silver-400/10">
                  <p className="body-sm text-center">
                    Headphones designed for one. Sharing means passing one earbud back and forth&mdash;awkward, compromised, and nothing like the real thing.
                  </p>
                </div>
              </div>
            </div>

            {/* New Experience - Shared */}
            <div
              className={`relative glass-panel-strong p-8 lg:p-12 rounded-3xl overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-icy-blue/5 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 to-transparent opacity-30" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-electric-purple to-icy-blue flex items-center justify-center">
                    <svg className="w-5 h-5 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-silver-400 tracking-wider uppercase">SYNC EXPERIENCE</span>
                    <p className="text-sm text-silver-300">Four People. One Shared Audio.</p>
                  </div>
                </div>

                {/* Shared Visual */}
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-2xl flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                      {/* Four People */}
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative" style={{ zIndex: 5 - i }}>
                          <div className="w-20 h-20 mx-auto mb-2 relative">
                            <div className="absolute inset-0 border-2 rounded-full" style={{ borderColor: i % 2 === 1 ? '#a855f7' : '#06b6d4' }} />
                            <div className="absolute top-2" style={{
                              left: i % 2 === 1 ? '-3px' : 'auto',
                              right: i % 2 === 0 ? '-3px' : 'auto',
                            }}>
                              <div className="w-4 h-7 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2" style={{ borderColor: i % 2 === 1 ? '#a855f7' : '#06b6d4' }} />
                              <div className="absolute top-0 left-0 w-4 h-7 rounded-full opacity-40 blur-sm" style={{ backgroundColor: i % 2 === 1 ? '#a855f7' : '#06b6d4' }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Connecting Wave Between Them */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end justify-center gap-1 h-12">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <div
                          key={j}
                          className="w-1.5 bg-gradient-to-t from-electric-purple to-icy-blue rounded-t"
                          style={{
                            height: `${25 + j * 8}px`,
                            animationDelay: `${j * 80}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-silver-400/10">
                  <p className="body-sm text-center text-silver-300">
                    Open the case. Share the earbuds. Everyone hears the same rich, immersive audio&mdash;together, in perfect sync.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Arrow/Transition */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-90">
            <svg className="w-16 h-16 text-silver-400/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-20 lg:mt-28 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-panel rounded-2xl max-w-3xl">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-purple/20 to-icy-blue/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-electric-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="body-md font-medium text-silver-200">
                The first charging case designed from the ground up for shared listening. Not an adapter. Not a splitter. A new category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}