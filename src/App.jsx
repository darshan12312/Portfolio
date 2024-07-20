import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

const App = () => {
  return (
    <div className='bg-[#161513] min-h-screen w-full font-outfit '>
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App