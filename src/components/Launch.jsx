import { useState, useRef, useEffect } from 'react'

export default function Launch() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState('idle') // idle, submitting, success, error
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef(null)

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrorMessage('Email address is required')
      setFormState('error')
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address')
      setFormState('error')
      return
    }

    setFormState('submitting')
    setErrorMessage('')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Simulate random success/failure for demo
    const success = Math.random() > 0.3

    if (success) {
      setFormState('success')
      setEmail('')
    } else {
      setFormState('error')
      setErrorMessage('Something went wrong. Please try again later.')
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (formState === 'error') {
      setFormState('idle')
      setErrorMessage('')
    }
  }

  const resetForm = () => {
    setFormState('idle')
    setErrorMessage('')
  }

  return (
    <section
      ref={sectionRef}
      id="launch"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="launch-title"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-800" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div
        className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-electric-purple/10 rounded-full blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-icy-blue/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0V60' fill='none' stroke='%23a855f7' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block text-xs font-medium text-electric-purple tracking-wider uppercase mb-6 animate-slide-up">
              THE LAUNCH
            </span>
            <h2
              id="launch-title"
              className="headline-2 text-gradient mb-6 animate-slide-up"
              style={{ animationDelay: '100ms' }}
            >
              The Next Great Listening<br />
              <span className="text-gradient-brand">Experience Is Better Together.</span>
            </h2>
            <p className="body-lg max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
              Be the first to hear when a new way to share audio arrives.
            </p>
          </div>

          {/* Signup Form */}
          <div className={`mt-12 lg:mt-16 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '300ms' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="relative" noValidate>
              <div className="relative max-w-md mx-auto">
                {/* Form Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800/60 to-charcoal-900/80 rounded-3xl border border-silver-400/10 backdrop-blur-xl" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  borderImage: 'linear-gradient(135deg, #a855f7, #06b6d4) 1',
                }} />

                <div className="relative p-1">
                  <div className="glass-panel-strong rounded-2xl p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                      {/* Email Input */}
                      <div className="relative flex-1">
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleInputChange}
                            onFocus={() => formState === 'idle' && setFormState('idle')}
                            placeholder="Enter your email"
                            className={`w-full px-6 py-4.5 bg-charcoal-900/50 border rounded-xl text-silver-100 placeholder-silver-500/60 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-purple/30 focus:border-electric-purple/50 ${formState === 'error' ? 'border-electric-purple/50 bg-electric-purple/5' : 'border-silver-400/10'}`}
                            disabled={formState === 'submitting' || formState === 'success'}
                            aria-describedby={formState === 'error' ? 'email-error' : formState === 'success' ? 'email-success' : undefined}
                            aria-invalid={formState === 'error'}
                          />

                          {/* Input Icons */}
                          {formState === 'submitting' && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-electric-purple">
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                            </div>
                          )}

                          {formState === 'success' && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-icy-blue">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}

                          {formState === 'error' && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-electric-purple">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {formState === 'error' && (
                          <p id="email-error" className="mt-2 text-sm text-electric-purple/80 flex items-center gap-1" role="alert">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            {errorMessage}
                          </p>
                        )}

                        {formState === 'success' && (
                          <p id="email-success" className="mt-2 text-sm text-icy-blue/80 flex items-center gap-1" role="status">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            You're on the list! We'll be in touch soon.
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={formState === 'submitting' || formState === 'success'}
                        className={`btn-primary w-full sm:w-auto flex-shrink-0 ${formState === 'submitting' ? 'opacity-75 cursor-wait' : ''} ${formState === 'success' ? 'bg-icy-blue hover:bg-icy-blue' : ''}`}
                        aria-busy={formState === 'submitting'}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {formState === 'submitting' ? (
                            <>
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Joining...
                            </>
                          ) : formState === 'success' ? (
                            <>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              You're In
                            </>
                          ) : (
                            'Get Notified at Launch'
                          )}
                        </span>
                      </button>
                    </div>

                    {/* Success State - Full Width Message */}
                    {formState === 'success' && (
                      <div className="mt-6 p-4 glass-panel rounded-xl border-icy-blue/20 animate-slide-up" role="status">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-icy-blue/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-icy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-silver-100">Thanks for joining!</p>
                            <p className="text-sm text-silver-400 mt-1">You'll be the first to know when SYNC launches. Check your inbox for confirmation.</p>
                          </div>
                          <button
                            type="button"
                            onClick={resetForm}
                            className="ml-auto flex-shrink-0 p-1 text-silver-400 hover:text-silver-100 transition-colors"
                            aria-label="Close success message"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Privacy Note */}
                    <p className="mt-6 text-center text-xs text-silver-500">
                      No spam. Unsubscribe anytime. <a href="#" className="text-electric-purple hover:text-electric-purple-light transition-colors underline">Privacy Policy</a>
                    </p>
                  </div>
                </div>
              </div>
            </form>

            {/* Social Proof / Trust Indicators */}
            <div className="mt-10 lg:mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-silver-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-electric-purple" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Early access for subscribers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-electric-purple" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Exclusive launch pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-electric-purple" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Behind-the-scenes updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Visual - Case with Notification Badge */}
        <div className="mt-20 lg:mt-24 relative animate-fade-in" style={{ animationDelay: '600ms' }} aria-hidden="true">
          <div className="max-w-md mx-auto relative">
            <div className="relative aspect-square bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 rounded-3xl border border-silver-400/10 flex items-center justify-center p-8">
              <div className="flex items-center justify-center gap-3">
                <MiniCaseEarbud side="left" color="electric-purple" />
                <MiniCaseEarbud side="right" color="icy-blue" />
                <MiniCaseEarbud side="left" color="electric-purple" />
                <MiniCaseEarbud side="right" color="icy-blue" />
              </div>
            </div>

            {/* Notification Badge Animation */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-purple to-icy-blue flex items-center justify-center animate-glow-pulse">
              <span className="text-charcoal-900 font-display font-bold text-2xl">+1</span>
            </div>

            <p className="text-center mt-6 text-sm text-silver-400">Join the waitlist →</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniCaseEarbud({ side, color }) {
  const isLeft = side === 'left'
  const rotation = isLeft ? -10 : 10
  const offsetX = isLeft ? -4 : 4

  return (
    <div
      className="relative"
      style={{ transform: `rotate(${rotation}deg) translateX(${offsetX}px)` }}
    >
      <div className="w-10 h-18 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-gradient-to-br from-silver-300 to-silver-500 rounded-full" />
        <div className="absolute top-4.5 left-1/2 -translate-x-1/2 w-3.5 h-10 bg-gradient-to-b from-charcoal-700 to-charcoal-900 rounded-b-lg" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-charcoal-700 to-charcoal-900 rounded-full border border-silver-400/10 flex items-center justify-center">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-br from-${color} to-${color}-light opacity-90`} />
        </div>
      </div>
    </div>
  )
}