import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      title: 'Open the Case',
      description: 'Reveal four earbuds nestled in one shared charging case. Two left, two right—each pair colored for intuitive pairing.',
      visual: <StepOneVisual />,
    },
    {
      number: '02',
      title: 'Share the Experience',
      description: 'Hand out the earbuds. Each person gets their perfect fit—left or right. No fumbling, no confusion, just seamless sharing.',
      visual: <StepTwoVisual />,
    },
    {
      number: '03',
      title: 'Enjoy the Moment',
      description: 'Press play. Music, movies, games—everyone hears the same immersive audio in perfect sync. Together, finally.',
      visual: <StepThreeVisual />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-it-works-title"
    >
      {/* Background Accents */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-icy-blue/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-purple/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block text-xs font-medium text-icy-blue tracking-wider uppercase mb-6 animate-slide-up">
            HOW IT WORKS
          </span>
          <h2
            id="how-it-works-title"
            className="headline-2 text-gradient animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            Four Earbuds.<br />
            <span className="text-gradient-brand">Countless Shared Moments.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-20">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
              visible={visible}
            />
          ))}
        </div>

        {/* Conceptual Disclaimer */}
        <div className="mt-20 lg:mt-28 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="body-sm max-w-2xl mx-auto text-silver-500">
            <em>Steps shown represent the conceptual product experience. Actual pairing method, synchronization technology, and setup process will be confirmed closer to launch.</em>
          </p>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index, isLast, visible }) {
  const isEven = index % 2 === 0

  return (
    <article
      className={`relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
        isEven ? '' : 'lg:direction-rtl'
      } transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${200 + index * 200}ms` }}
    >
      {/* Visual Side */}
      <div className="relative order-1 lg:order-none">
        <div className="relative aspect-[4/3] lg:aspect-square glass-panel-strong rounded-3xl overflow-hidden sticky top-24">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700/50 to-charcoal-900/50" />
          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            {step.visual}
          </div>
        </div>

        {/* Connecting Line Between Steps */}
        {!isLast && (
          <div className="hidden lg:block absolute right-0 top-1/2 w-8 h-px bg-gradient-to-r from-silver-400/20 to-transparent" />
        )}
      </div>

      {/* Content Side */}
      <div className="relative order-2 lg:order-none flex flex-col justify-center lg:pr-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl sm:text-4xl font-display font-bold text-electric-purple/50 tracking-tight">
            {step.number}
          </span>
          <div className="w-full h-px bg-gradient-to-r from-electric-purple/30 to-transparent" />
        </div>

        <h3 className="headline-3 text-gradient mb-4">
          {step.title}
        </h3>

        <p className="body-lg text-silver-300 leading-relaxed">
          {step.description}
        </p>
      </div>
    </article>
  )
}

// Step 1 Visual: Open Case with 4 Earbuds
function StepOneVisual() {
  return (
    <div className="relative w-full h-full max-w-md max-h-[400px] mx-auto flex items-center justify-center">
      {/* Case */}
      <div className="relative w-full h-3/4 bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 rounded-2xl border border-silver-400/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex items-center justify-center p-6">
        <div className="flex items-center justify-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <MiniEarbud key={i} side={i <= 2 ? 'left' : 'right'} index={i} />
          ))}
        </div>
      </div>

      {/* Opening Animation Indicator */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 glass-panel rounded-full">
        <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
        <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
        <span className="text-xs font-medium text-silver-300 ml-1 mr-1">OPEN</span>
      </div>

      {/* Labels */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-8 text-xs text-silver-400">
        <span className="text-electric-purple font-medium">LEFT × 2</span>
        <span className="text-icy-blue font-medium">RIGHT × 2</span>
      </div>
    </div>
  )
}

// Step 2 Visual: People Sharing
function StepTwoVisual() {
  return (
    <div className="relative w-full h-full max-w-md max-h-[400px] mx-auto flex items-center justify-center">
      <div className="flex items-end justify-center gap-3">
        {['electric-purple', 'icy-blue', 'electric-purple', 'icy-blue'].map((color, i) => (
          <PersonWithEarbud key={i} color={color} delay={i * 100} />
        ))}
      </div>

      {/* Sound Wave Connecting */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-end justify-center gap-1 h-16">
        {[1, 2, 3, 4, 5].map((j) => (
          <div
            key={j}
            className="w-1.5 bg-gradient-to-t from-electric-purple to-icy-blue rounded-t"
            style={{
              height: `${20 + j * 10}px`,
              animationDelay: `${j * 100}ms`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs font-medium text-silver-400 tracking-wider uppercase">SHARED AUDIO SYNC</p>
      </div>
    </div>
  )
}

// Step 3 Visual: Enjoying Together
function StepThreeVisual() {
  return (
    <div className="relative w-full h-full max-w-md max-h-[400px] mx-auto flex items-center justify-center">
      <div className="relative aspect-square max-w-xs">
        {/* Scene Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            {/* 4 People in a Circle */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative" style={{ zIndex: 5 - i }}>
                  <div className="w-16 h-16 mx-auto relative">
                    <div className="absolute inset-0 border-2 rounded-full" style={{ borderColor: i % 2 === 1 ? '#a855f7' : '#06b6d4' }} />
                    <div className="absolute top-1" style={{
                      left: i % 2 === 1 ? '-2px' : 'auto',
                      right: i % 2 === 0 ? '-2px' : 'auto',
                    }}>
                      <div className="w-3 h-5 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2" style={{ borderColor: i % 2 === 1 ? '#a855f7' : '#06b6d4' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Element - Phone/Content */}
            <div className="relative w-20 h-32 mx-auto bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-xl border border-silver-400/10 flex items-center justify-center">
              <div className="w-12 h-16 bg-gradient-to-br from-electric-purple/30 to-icy-blue/30 rounded-lg" />
            </div>

            <p className="mt-4 text-sm text-silver-400 font-medium">SAME MOMENT</p>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-electric-purple/20 via-transparent to-icy-blue/20 rounded-3xl blur-2xl opacity-50" />
      </div>
    </div>
  )
}

function MiniEarbud({ side, index }) {
  const isLeft = side === 'left'
  const color = isLeft ? 'electric-purple' : 'icy-blue'
  const rotation = isLeft ? -10 : 10

  return (
    <div
      className="relative"
      style={{ transform: `rotate(${rotation}deg)`, zIndex: isLeft ? 2 : 1 }}
    >
      <div className="w-10 h-18 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-silver-300 to-silver-500 rounded-full" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-b-lg" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-full border border-silver-400/10 flex items-center justify-center">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-br from-${color} to-${color}-light opacity-80`} />
        </div>
      </div>
    </div>
  )
}

function PersonWithEarbud({ color, delay }) {
  return (
    <div
      className="relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-16 h-16 mx-auto mb-2">
        <div className="absolute inset-0 border-2 border-silver-400/20 rounded-full" />
        <div className="absolute top-1" style={{
          left: color === 'electric-purple' ? '-3px' : 'auto',
          right: color === 'icy-blue' ? '-3px' : 'auto',
        }}>
          <div className="w-3 h-6 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2" style={{ borderColor: color }} />
          <div className="absolute top-0 left-0 w-3 h-6 rounded-full opacity-40 blur-sm" style={{ backgroundColor: color }} />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2 border-b-2 border-l-2 border-r-2 border-silver-400/20 rounded-bl-lg rounded-br-lg" />
    </div>
  )
}