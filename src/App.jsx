import Hero from './components/Hero'
import TheBigIdea from './components/TheBigIdea'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import ProductSpotlight from './components/ProductSpotlight'
import Launch from './components/Launch'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-900 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <TheBigIdea />
        <HowItWorks />
        <UseCases />
        <ProductSpotlight />
        <Launch />
      </main>
      <Footer />
    </div>
  )
}

export default App