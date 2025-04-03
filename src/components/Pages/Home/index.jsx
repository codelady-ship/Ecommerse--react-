import React, { useState } from 'react'
import Header from "../../layout/Header"
import Footer from "../../layout/Footer"
import Categories from '../../Pages/Categories';
import Products from '../../Pages/Products';
const Home = () => {
  const [searchedText, setSearchedText] = useState('');
  const [activeCategory, setActiveCategory] = useState('All'); 
  return (
      <>
      <Header searchedText={searchedText} setSearchedText={setSearchedText} />
        <div className='px-5 grid lg:grid-cols-[250px_3fr]'>
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Products 
        searchedText={searchedText} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        />
        </div>
        <Footer/>
      </>
  )
}

export default Home
