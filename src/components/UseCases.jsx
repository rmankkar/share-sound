import { useEffect, useRef, useState } from 'react'

export default function UseCases() {
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

  const useCases = [
    {
      id: 'music',
      title: 'Music With Your Crew',
      tagline: 'Four friends. One playlist. The soundtrack to your night, heard together.',
      color: 'electric-purple',
      accent: 'icy-blue',
      visual: <MusicVisual />,
    },
    {
      id: 'movies',
      title: 'Movie Nights, Anywhere',
      tagline: 'Long flight? Road trip? Living room fort? Everyone gets the full cinema audio—no splitter cables, no compromises.',
      color: 'icy-blue',
      accent: 'electric-purple',
      visual: <MoviesVisual />,
    },
    {
      id: 'gaming',
      title: 'Gaming Together',
      tagline: 'Squad up with shared comms and game audio. Coordinate, react, celebrate—everyone in the same acoustic space.',
      color: 'electric-purple',
      accent: 'icy-blue',
      visual: <GamingVisual />,
    },
    {
      id: 'moments',
      title: 'Little Moments, Bigger Memories',
      tagline: 'A lullaby for two. A podcast for the family. The song that became "your song." Shared audio makes it yours.',
      color: 'icy-blue',
      accent: 'electric-purple',
      visual: <MomentsVisual />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="use-cases-title"
    >
      {/* Background Atmosphere */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-electric-purple/10 via-transparent to-icy-blue/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block text-xs font-medium text-icy-blue tracking-wider uppercase mb-6 animate-slide-up">
            MADE FOR YOUR KIND OF MOMENTS
          </span>
          <h2
            id="use-cases-title"
            className="headline-2 text-gradient animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            Four Earbuds.<br />
            <span className="text-gradient-brand">Every Kind of Together.</span>
          </h2>
        </div>

        {/* Use Cases Grid - Editorial Layout */}
        <div className="space-y-20 lg:space-y-24">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCaseCard({ useCase, index, visible }) {
  const isEven = index % 2 === 0

  return (
    <article
      className={`relative grid lg:grid-cols-2 gap-12 lg:gap-16 ${
        isEven ? '' : 'lg:direction-rtl'
      } transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${100 + index * 150}ms` }}
    >
      {/* Visual Side - Large Immersive */}
      <div className="relative order-1 lg:order-none">
        <div className="relative aspect-[4/3] lg:aspect-[5/4] glass-panel-strong rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700/30 to-charcoal-900/30" />
          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            {useCase.visual}
          </div>

          {/* Accent Border */}
          <div className="absolute inset-0 border-2 rounded-3xl opacity-20" style={{
            borderImage: `linear-gradient(135deg, ${useCase.color}, ${useCase.accent}) 1`,
          }} />
        </div>

        {/* Floating Label */}
        <div className="absolute -bottom-6 lg:-bottom-8 left-0 lg:left-4 flex items-center gap-2 px-4 py-2 glass-panel rounded-full animate-float">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: useCase.color }} />
          <span className="text-xs font-medium text-silver-300 tracking-wider uppercase">
            {useCase.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div className="relative order-2 lg:order-none flex flex-col justify-center lg:pr-8">
        {/* Category Tag */}
        <span className="inline-block text-xs font-medium tracking-wider uppercase mb-4 px-3 py-1 rounded-full" style={{
          backgroundColor: `${useCase.color}20`,
          color: useCase.color,
        }}>
          {useCase.id}
        </span>

        {/* Title */}
        <h3 className="headline-3 text-gradient mb-6">
          {useCase.title}
        </h3>

        {/* Tagline */}
        <p className="body-lg text-silver-300 leading-relaxed mb-8">
          {useCase.tagline}
        </p>

        {/* Subtle Accent Line */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
      </div>
    </article>
  )
}

// Music Visual - 4 friends hanging out
function MusicVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative flex items-end justify-center gap-4">
        {/* 4 People in a row */}
        {['electric-purple', 'icy-blue', 'electric-purple', 'icy-blue'].map((color, i) => (
          <PersonSilhouetteDetailed key={i} color={color} delay={i * 150} />
        ))}
      </div>

      {/* Floating Music Notes */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-3">
        {['🎵', '🎶', '🎵', '🎶'].map((note, i) => (
          <span
            key={i}
            className="text-2xl opacity-60"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            {note}
          </span>
        ))}
      </div>

      {/* Shared Audio Wave */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end justify-center gap-1.5 h-20">
        {[1, 2, 3, 4, 5, 6, 7].map((j) => (
          <div
            key={j}
            className="w-2 bg-gradient-to-t from-electric-purple to-icy-blue rounded-t"
            style={{
              height: `${15 + Math.sin(j) * 15}px`,
              animationDelay: `${j * 80}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Movies Visual - Friends watching together
function MoviesVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Screen/Device */}
      <div className="relative w-72 h-40 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-xl border border-silver-400/10 flex items-center justify-center">
        <div className="w-48 h-20 bg-gradient-to-br from-electric-purple/30 to-icy-blue/30 rounded-lg" />
      </div>

      {/* People around */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-4 pb-4">
        {['electric-purple', 'icy-blue', 'electric-purple', 'icy-blue'].map((color, i) => (
          <PersonSilhouetteSmall key={i} color={color} />
        ))}
      </div>

      {/* Sound waves from screen */}
      <div className="absolute top-1/2 right-8 transform translate-y-1/2 flex flex-col items-end gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-px bg-gradient-to-r from-transparent to-electric-purple/50 rounded"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

// Gaming Visual - Gaming setup
function GamingVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dual Monitor Setup Suggestion */}
      <div className="relative flex items-center justify-center gap-4">
        {/* Monitor 1 */}
        <div className="relative w-48 h-30 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-lg border border-silver-400/10 flex items-center justify-center">
          <div className="w-32 h-16 bg-gradient-to-br from-electric-purple/40 to-icy-blue/40 rounded" />
        </div>

        {/* Monitor 2 */}
        <div className="relative w-48 h-30 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-lg border border-silver-400/10 flex items-center justify-center">
          <div className="w-32 h-16 bg-gradient-to-br from-electric-purple/40 to-icy-blue/40 rounded" />
        </div>
      </div>

      {/* 4 Gamers */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4 pb-4">
        {['electric-purple', 'icy-blue', 'electric-purple', 'icy-blue'].map((color, i) => (
          <GamerSilhouette key={i} color={color} />
        ))}
      </div>

      {/* Sync Indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 glass-panel rounded-full">
        <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-icy-blue rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
        <span className="text-xs font-mono text-silver-300">SYNC</span>
      </div>
    </div>
  )
}

// Moments Visual - Intimate/family
function MomentsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Cozy Scene */}
      <div className="relative flex items-end justify-center gap-6">
        {/* Couple/Parent-Child pairs */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <PersonSilhouetteSmall color="electric-purple" />
            <PersonSilhouetteSmall color="icy-blue" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <PersonSilhouetteSmall color="electric-purple" />
            <PersonSilhouetteSmall color="icy-blue" />
          </div>
        </div>
      </div>

      {/* Heart/Connection Visual */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
        <div className="w-4 h-4 bg-electric-purple/30 rounded-full blur-md animate-pulse" />
        <div className="w-4 h-4 bg-icy-blue/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '300ms' }} />
        <div className="w-4 h-4 bg-electric-purple/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '600ms' }} />
      </div>

      {/* Floating musical notes/particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-40"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
              backgroundColor: i % 2 === 0 ? '#a855f7' : '#06b6d4',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Reusable Person Components
function PersonSilhouetteDetailed({ color, delay }) {
  return (
    <div
      className="relative"
      style={{ animationDelay: `${delay}ms`, zIndex: 4 }}
    >
      <div className="relative w-20 h-20 mx-auto mb-1">
        <div className="absolute inset-0 border-2 border-silver-400/20 rounded-full" />
        <div className="absolute top-2" style={{
          left: color === 'electric-purple' ? '-4px' : 'auto',
          right: color === 'icy-blue' ? '-4px' : 'auto',
        }}>
          <div className="w-4 h-8 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-2" style={{ borderColor: color }} />
          <div className="absolute top-0 left-0 w-4 h-8 rounded-full opacity-50 blur-sm" style={{ backgroundColor: color }} />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-3 border-b-2 border-l-2 border-r-2 border-silver-400/20 rounded-bl-lg rounded-br-lg" />
    </div>
  )
}

function PersonSilhouetteSmall({ color }) {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-2 border-silver-400/30 rounded-full" />
      <div className="absolute top-1" style={{
        left: color === 'electric-purple' ? '-2px' : 'auto',
        right: color === 'icy-blue' ? '-2px' : 'auto',
      }}>
        <div className="w-2.5 h-5 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-1.5" style={{ borderColor: color }} />
        <div className="absolute top-0 left-0 w-2.5 h-5 rounded-full opacity-50 blur-sm" style={{ backgroundColor: color }} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 border-b-2 border-l-2 border-r-2 border-silver-400/30 rounded-bl-lg rounded-br-lg" />
    </div>
  )
}

function GamerSilhouette({ color }) {
  return (
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 border-2 border-silver-400/30 rounded-full" />
      {/* Headset */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-10 border-2 border-silver-400/30 rounded-t-2xl" />
      <div className="absolute top-2" style={{
        left: color === 'electric-purple' ? '2px' : 'auto',
        right: color === 'icy-blue' ? '2px' : 'auto',
      }}>
        <div className="w-3 h-5 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-full border-1.5" style={{ borderColor: color }} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2 border-b-2 border-l-2 border-r-2 border-silver-400/30 rounded-bl-lg rounded-br-lg" />
    </div>
  )
}