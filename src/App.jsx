
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import NotFound from './components/Pages/Error404';
import ProductsDetail from './components/Pages/ProductsDetail';

const App = () => {
  
  const routes = [
      { id: 0, path: "/", element: <Home /> },
      { id: 1, path: "/products/:slug", element: <ProductsDetail /> },
      { id: 2, path: "/about", element: <About /> },
      { id: 3, path: "/contact", element: <Contact /> },
      { id: 4, path: "/services", element: <Services /> },
      { id: 5, path: "*", element: <NotFound /> },
    ];
  
  return (
     <>
     <Routes>
      {routes.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
       
      </>
  );
};

export default App;
