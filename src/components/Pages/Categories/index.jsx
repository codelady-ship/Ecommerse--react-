import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = ({ activeCategory, setActiveCategory }) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        setCategories(data.categories);
      })
      .catch((err) => {
        console.error('Error categories:', err);
      });
  }, [url]);

  return (
    <div className='pt-10'>
      <h1 className='text-2xl text-white font-bold border border-green-800 rounded p-1 bg-green-800'>
        Categories
      </h1>
      <div className='flex flex-col'>
        <div
          className={`bg-green-800 p-1 m-1 rounded cursor-pointer text-xl ${activeCategory === "All" ? 'text-black' : 'text-amber-50'}`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </div>

        {/* Other categories */}
        {categories.map(({ id, name }) => (
          <div 
            key={id}
            className={`bg-green-800 p-1 m-1 rounded text-xl ${activeCategory === name ? 'text-black' : 'text-amber-50'}`}
            onClick={() => setActiveCategory(name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
