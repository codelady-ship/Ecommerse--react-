import React, { useEffect, useState } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useParams, Link } from 'react-router-dom';  
import axios from 'axios';
import RatingStar from './RatingStar';
import NotFound from '../Error404';
import Loader from '../Loader';
import UseBasket from '../Store/Basket';

const ProductsDetail = () => {
  const { slug } = useParams();  // slug URL
  const [product, setProduct] = useState(null);  // product details State 
  const [currentImage, setCurrentImage] = useState("");  // image ucun State 
  const [loading, setLoading] = useState(true);  // Loading state
  const [isAddedBasket, setIsAddedBasket] = useState(false); // basket control
  const {basket,addNewProduct} =UseBasket() //zustand
  const url = import.meta.env.VITE_BACKEND_URL;

  // useEffect
  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        const currentproduct = data.products.find((product) => product.slug === slug);
        setProduct(currentproduct); // set product details
        setCurrentImage(currentproduct.images[0]); // set default image 
        basket.forEach(({id})=>{
          currentproduct.id === id && setIsAddedBasket(true);
        })
        setLoading(false);  
      });
  }, [slug, url]); 

  // loading
  if (loading) 
    return (
      <Loader/>
    );

  // not found
  if (!product.slug) {
    return <NotFound />;
  }

  // Basket function
  function addBasket() {
    const item = { ...product, count: 1 };
    addNewProduct(product)
    setIsAddedBasket(true);
    console.log("Məhsul səbətə əlavə olundu:", product);
  }

  return (
    <div>
      <Header />
      <Link to="/" className=" sm: text-xl font-bold m-[10%] text-black lg:hidden"> 
        <button className='my-5 px-2 py-1 text-amber-50 rounded-2xl bg-green-600 hover:text-amber-300 '>Back to All Product</button> 
      </Link>
      <h1 className="text-3xl font-bold mx-[10%] mt-2 text-green-600"> About {product.title}</h1>
      <div className="container px-auto py-5 sx:flex-wrap md:flex">
        <div className='sm:grid-rows-1 gap-10 md:grid-rows-2 '> 
          <img 
            src={currentImage} 
            alt={product.title} 
            className="object-cover h-80 w-110 mb-1 ml-10 rounded-lg"  
          /> 
          <div className='grid grid-cols-[145px_145px_145px] gap-1 ml-10'>
            {product.images?.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Product image ${index + 1}`} 
                className='rounded-lg cursor-pointer' 
                onClick={() => setCurrentImage(image)} 
              />
            ))}
          </div>
        </div>
        <div className='ml-10 mt-5'>
          <p className="text-gray-600 w-110 p-2 shadow-2xl overflow-hidden">{product.description}</p>
          <h3 className="text-lg font-bold mt-5 text-gray-600">Category: {product.category.name}</h3>
          <h2 className="text-xl font-bold text-green-800 mt-5">Price: ${product.price}</h2>

          {/* Rating */}
          <div className="mt-5">
            <h4 className="font-semibold text-gray-800">Rate this product: </h4>
            <RatingStar rating={product.rating} />
          </div>

          {/* Basket button */}
          <button  
            className={`px-2 py-1 mt-5 font-bold text-white rounded ${isAddedBasket ? "bg-red-600" : "bg-green-600"}`} 
            onClick={addBasket}
          >
            {isAddedBasket ? "Added" : "+Add"} to basket
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsDetail;
