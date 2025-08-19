import { useState } from 'react'


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Club from './components/Club'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Menu/>
    <Club/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
