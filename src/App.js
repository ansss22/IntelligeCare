import React from 'react'

import { Benifits , FAQ, Features, Footer, Header, Testimonials} from './containers'
import { Navbar, Feature, CTA } from './components'
const App = () => {
  return (
    <div className='App'>
      <div>
          <Navbar />
          <Header />
      </div>
      <Feature />
      <Benifits />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App