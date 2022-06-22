import React from 'react'
import Banner from './components/Banner'
import Carrossel from './components/Carrossel'
import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Skills />
      {/* <Carrossel /> */}
      <Footer />
    </div>
  )
}

export default App