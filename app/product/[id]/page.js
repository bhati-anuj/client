import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductDetails from '../../HomePage/ProductDetails'
import SecondHeader from '../../components/SecondHeader'

const page = () => {
  return (
    <>
    <Header/>
    <SecondHeader/>
    <ProductDetails/>
    <Footer/>
    </>
  )
}

export default page