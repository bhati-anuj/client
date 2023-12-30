import React from 'react'
import HeroSection from './HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SecondHeader from '../components/SecondHeader'
import dynamic from 'next/dynamic'


import Link from 'next/link'
import CategorySection from './CategorySection'
const Section1 = dynamic(() => import('./Section1') , { ssr: false })
const Section2 = dynamic(() => import('./Section2'), { ssr: false })


const HomePage = () => {
  return (
    <>
    <Header/>
    <SecondHeader/>
    <HeroSection/>
    <CategorySection/>
    {/* <Link  href="/[id]" as={`/kamla`}>Dynamic link</Link> */}
    <Section1/>
    <Section2/>
    <Footer/>
    </>
  )
}

export default HomePage