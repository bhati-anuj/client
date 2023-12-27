import React from 'react'
import HeroSection from './HeroSection'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'
import SecondHeader from '../components/SecondHeader'
import Section1 from './Section1'
import Section2 from './Section2'


const HomePage = () => {
  return (
    <>
    <Header/>
    <SecondHeader/>
    <HeroSection/>
    <Section1/>
    <Section2/>
    
    <Footer/>
    </>
  )
}

export default HomePage