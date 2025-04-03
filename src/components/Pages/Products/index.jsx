import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import DataNotFound from '../DataNotFound';
import Loader from '../Loader';

const Products = ({ searchedText, activeCategory}) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const count = 4;
  const [pages, setPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(count);
  const [filteredDataProducts, setFilteredDataProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);

  // Data yükləmək
  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        if (data && data.products) {
          setProducts(data.products);
          setLoading(false);
          setPages(Math.ceil(data.products.length / count)); // Toplam səhifə sayını hesablamaq
        } else {
          toast.error("No products found");
        }
      })
      .catch(err => {
        console.error(err);
        setError("An error occurred while fetching products.");
        toast.error("Error loading products.");
      });
  }, [url]);

  // Pagination funksiyası
  useEffect(() => {
    setStartIndex((activePage - 1) * count);
    setEndIndex(activePage * count);
  }, [activePage]);

  // Məhsul axtarışı
  useEffect(() => {
    let filteredData = products;

    // `searchedText` ilə filtr
    if (searchedText) {
      filteredData = filteredData.filter(({ title }) =>
        title.toLowerCase().includes(searchedText.toLowerCase())
      );
    }

    // `activeCategory` ilə filtr
    if (activeCategory && activeCategory !== 'All') {
      filteredData = filteredData.filter(({ category }) =>
        category.name.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    setPages(Math.ceil(filteredData.length / count));
    setFilteredDataProducts(filteredData);
    setActivePage(1); 
  }, [searchedText, activeCategory, products]);

  // Yüklənmə 
  if (loading) {
    return <Loader />;
  }

  // error 
  if (error) {
    return (
      <div className="text-center text-red-600">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between p-3">
      <h1 className="text-4xl text-green-800 font-semibold pt-3">Products</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6">
          {filteredDataProducts.length > 0 ? (
            filteredDataProducts
              .slice(startIndex, endIndex)
              .map(({ id, title, images, category, description, slug, price }) => (
                <div key={id} className="relative border border-green-800 rounded-lg shadow-lg overflow-hidden">
                  <img src={images[0]} className="object-cover h-70 w-full" alt={title} />
                  <div className='p-2'>
                    <h2 className="text-2xl font-semibold truncate">{title}</h2>
                    <h1 className="absolute top-2 right-2 px-2 py-0.5 font-bold bg-green-800 text-white rounded">
                      {category.name}
                    </h1>
                    <h2 className="my-2 line-clamp-2 text-sm text-gray-700">{description}</h2>
                    <h2 className="font-extrabold text-green-800">Price: ${price}</h2>
                  </div>
                  <Link to={"/products/" + slug} className="absolute inset-0"></Link>
                </div>
              ))
          ) : (
            <DataNotFound />
          )}

          {/* Pagination Component */}
          <div className="sm: flex justify-center items-center gap-3 lg:ml-160">
            {new Array(pages).fill("").map((_, index) => (
              <button
                key={index}
                className={`px-2 py-1 rounded ${activePage === index + 1 ? 'bg-red-600 text-white' : 'bg-green-500 text-white'}`}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
