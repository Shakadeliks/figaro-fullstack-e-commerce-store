import React from 'react'
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home;