import React from 'react'
import Header from '../../partials/Header'
import Hero from './hero/Hero'
import Stores from './stores/Stores'
import Services from './services/Services'
import Contact from '../../partials/Contact'
import Footer from '../../partials/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Stores/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
