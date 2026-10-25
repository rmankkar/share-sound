import { useEffect, useRef, useState } from 'react'

export default function ProductSpotlight() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

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

  const features = [
    {
      id: 'four-earbuds',
      label: 'Four Earbuds',
      description: 'Two left, two right — each anatomically shaped for its side. Color-coded for instant recognition.',
      position: { top: '15%', left: '8%' },
      icon: <EarbudsIcon />,
    },
    {
      id: 'shared-case',
      label: 'Shared Case',
      description: 'A single compact case holds and charges all four. Magnetic alignment ensures perfect seating every time.',
      position: { top: '50%', left: '5%' },
      icon: <CaseIcon />,
    },
    {
      id: 'compact-design',
      label: 'Compact Form',
      description: 'Designed to slip into any pocket or bag. The shared architecture is smaller than carrying two separate cases.',
      position: { top: '80%', left: '12%' },
      icon: <CompactIcon />,
    },
    {
      id: 'premium-materials',
      label: 'Premium Build',
      description: 'Matte-finish aluminum chassis with soft-touch interior. Engineered for daily life, built to last.',
      position: { top: '20%', right: '8%' },
      icon: <MaterialsIcon />,
    },
    {
      id: 'intuitive-pairing',
      label: 'Intuitive Pairing',
      description: 'Color-matched left/right buds eliminate confusion. Open, grab, listen — no guessing which is yours.',
      position: { top: '55%', right: '5%' },
      icon: <PairingIcon />,
    },
    {
      id: 'shared-sync',
      label: 'Shared Sync',
      description: 'Conceptual: simultaneous audio streaming to all four buds. Latency matched across every listener.',
      position: { top: '85%', right: '10%' },
      icon: <SyncIcon />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="product-title"
    >
      {/* Background Atmosphere */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-800/50"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-electric-purple/10 via-transparent to-icy-blue/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-xs font-medium text-electric-purple tracking-wider uppercase mb-6 animate-slide-up">
            PRODUCT SPOTLIGHT
          </span>
          <h2
            id="product-title"
            className="headline-2 text-gradient animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            Small Case.<br />
            <span className="text-gradient-brand">Bigger Togetherness.</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            One case holding four earbuds. A compact, premium product concept designed around the idea of shared listening.
          </p>
        </div>

        {/* Product Visual with Annotations */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] lg:aspect-[3/2]">
            {/* Main Product Render Area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ProductCaseVisual />
            </div>

            {/* Feature Annotations */}
            <div className="absolute inset-0 pointer-events-none">
              {features.map((feature) => (
                <FeatureAnnotation
                  key={feature.id}
                  feature={feature}
                  isHovered={hoveredFeature === feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  visible={visible}
                />
              ))}
            </div>
          </div>

          {/* Feature Details Panel */}
          <div className="mt-12 lg:mt-16">
            <FeatureDetailPanel
              features={features}
              hoveredFeature={hoveredFeature}
              visible={visible}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="body-sm max-w-2xl mx-auto text-silver-500">
            <em>Product visuals show conceptual design. Dimensions, materials, charging capacity, and technical specifications will be confirmed closer to launch.</em>
          </p>
        </div>
      </div>
    </section>
  )
}

function ProductCaseVisual() {
  return (
    <div className="relative w-full max-w-[500px] max-h-[450px]">
      {/* Outer Glow */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 via-transparent to-icy-blue/20 rounded-3xl blur-3xl animate-glow-pulse"
        style={{ transform: 'scale(1.3)' }}
      />

      {/* Case */}
      <div className="relative w-full h-full bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 rounded-3xl border border-silver-400/10 shadow-[0_30px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(168,85,247,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]">
        {/* Top Lid */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-600/30 via-charcoal-800 to-charcoal-900" />

          {/* Earbuds in Case */}
          <div className="relative h-full flex items-center justify-center p-10">
            <div className="flex items-center justify-center gap-4">
              {/* Left Earbud 1 */}
              <DetailedEarbud side="left" index={1} color="electric-purple" zIndex={4} />
              {/* Right Earbud 1 */}
              <DetailedEarbud side="right" index={1} color="icy-blue" zIndex={3} />
              {/* Left Earbud 2 */}
              <DetailedEarbud side="left" index={2} color="electric-purple" zIndex={2} />
              {/* Right Earbud 2 */}
              <DetailedEarbud side="right" index={2} color="icy-blue" zIndex={1} />
            </div>
          </div>

          {/* Charging Contacts Visible */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1.5 h-2 bg-silver-400/60 rounded-t"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Hinge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-gradient-to-r from-charcoal-600 to-charcoal-800 rounded-t-2xl border-t border-silver-400/10" />

        {/* Status LED */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-electric-purple rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
          <div className="w-2.5 h-2.5 bg-icy-blue rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.6)]" style={{ animationDelay: '200ms' }} />
          <div className="w-2.5 h-2.5 bg-electric-purple rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.6)]" style={{ animationDelay: '400ms' }} />
          <div className="w-2.5 h-2.5 bg-icy-blue rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.6)]" style={{ animationDelay: '600ms' }} />
        </div>
      </div>

      {/* Surface Reflection */}
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[70%] h-32 bg-gradient-to-t from-charcoal-900/20 to-transparent rounded-full blur-2xl" />
    </div>
  )
}

function DetailedEarbud({ side, index, color, zIndex }) {
  const isLeft = side === 'left'
  const rotation = isLeft ? -12 : 12
  const offsetX = isLeft ? -6 : 6

  return (
    <div
      className="relative"
      style={{
        transform: `rotate(${rotation}deg) translateX(${offsetX}px)`,
        zIndex,
      }}
    >
      {/* Earbud Body */}
      <div className="relative w-16 h-28">
        {/* Ear Tip */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-silver-200 to-silver-400 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(0,0,0,0.3)]" />

        {/* Stem */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-5 h-16 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-b-xl border-l border-silver-400/10 border-r border-silver-400/10" />

        {/* Touch Surface */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-full border border-silver-400/10 shadow-[0_6px_25px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center">
          <div className={`w-5 h-5 rounded-full bg-gradient-to-br from-${color} to-${color}-light opacity-90 shadow-[0_0_15px_rgba(168,85,247,0.6)]`} />
        </div>
      </div>

      {/* Charging Contacts */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
        <div className="w-1.5 h-2 bg-silver-400/60 rounded-t" />
        <div className="w-1.5 h-2 bg-silver-400/60 rounded-t" />
      </div>

      {/* Label */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
        <span className="text-xs font-medium tracking-wider uppercase" style={{ color: color }}>
          {side.toUpperCase()} {index}
        </span>
      </div>
    </div>
  )
}

function FeatureAnnotation({ feature, isHovered, onMouseEnter, onMouseLeave, visible }) {
  const { top, left, right } = feature.position
  const style = {
    top,
    left: left ? left : undefined,
    right: right ? right : undefined,
    transform: 'translate(-50%, -50%)',
    zIndex: isHovered ? 20 : 10,
  }

  if (left) style.transform = 'translateX(-50%)'
  if (right) style.transform = 'translateX(50%)'

  return (
    <div
      className={`relative transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ ...style, animationDelay: `${Math.random() * 300}ms` }}
    >
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`relative flex items-center gap-3 px-4 py-3 glass-panel-strong rounded-2xl min-w-[200px] max-w-[280px] ${isHovered ? 'shadow-[0_0_40px_rgba(168,85,247,0.3)] border-electric-purple/30' : 'border-silver-400/10'}`}
        style={{ pointerEvents: 'auto' }}
      >
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-gradient-to-br from-electric-purple to-icy-blue' : 'bg-charcoal-700/50'}`}>
          <div className={`transition-colors duration-300 ${isHovered ? 'text-charcoal-900' : 'text-silver-400'}`}>
            {feature.icon}
          </div>
        </div>
        <div className="text-left">
          <span className="text-sm font-medium text-silver-100">{feature.label}</span>
          <span className="text-xs text-silver-500 block mt-0.5">{feature.description}</span>
        </div>
      </button>

      {/* Connector Line to Product */}
      <div
        className="absolute w-1 h-20 bg-gradient-to-b from-electric-purple/50 to-transparent"
        style={{
          top: '100%',
          left: left ? '50%' : 'auto',
          right: right ? '50%' : 'auto',
          transform: left ? 'translateX(-50%)' : right ? 'translateX(50%)' : undefined,
        }}
      />
    </div>
  )
}

function FeatureDetailPanel({ features, hoveredFeature, visible }) {
  const activeFeature = hoveredFeature
    ? features.find((f) => f.id === hoveredFeature)
    : features[0]

  return (
    <div className="glass-panel-strong rounded-3xl p-6 lg:p-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-purple/20 to-icy-blue/20 flex items-center justify-center">
              <div className="text-electric-purple">{activeFeature.icon}</div>
            </div>
            <div>
              <span className="text-xs font-medium text-electric-purple tracking-wider uppercase">FEATURE</span>
              <h3 className="headline-3 text-gradient mt-1">{activeFeature.label}</h3>
            </div>
          </div>
          <p className="body-lg text-silver-300">{activeFeature.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onMouseEnter={() => {}}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                hoveredFeature === feature.id || (!hoveredFeature && feature === features[0])
                  ? 'bg-gradient-to-r from-electric-purple to-icy-blue text-charcoal-900 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'bg-charcoal-700/50 text-silver-400 hover:text-silver-100 hover:bg-charcoal-600/50 border border-silver-400/10'
              }`}
              onClick={() => {}}
            >
              {feature.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Feature Icons
function EarbudsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function CaseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h18M5 17h14M7 21h10" />
    </svg>
  )
}

function CompactIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  )
}

function MaterialsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function PairingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
}

function SyncIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}