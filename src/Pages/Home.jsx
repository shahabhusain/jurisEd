import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Header from '../Layout/Header'
const Home = () => {
  return (
    <div>
  <Hero />
      <About />
      <Features />
      <Contact /> 
    </div>
  )
}

export default Home