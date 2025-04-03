import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';  // Sebet iconu
import { HiOutlineMenuAlt3, HiX  } from 'react-icons/hi';  //menu icon 
import UseBasket from '../../Pages/Store/Basket';

const Header = ({searchedText,setSearchedText}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
const {basket} = UseBasket()
  
  const links = [
    { id: 0, title: 'Home', href: '/' },
    { id: 1, title: 'Contact', href: '/contact' },
    { id: 2, title: 'About', href: '/about' },
    { id: 3, title: 'Services', href: '/services' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Menu function
  };

  return (
    <div className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Our Boutigue</Link>
        </div>

        {/* Basket Icon and Badge */}
        <div className="relative">
          <NavLink to="/cart">
            <FaShoppingCart size={24} />
            <span className="absolute top-[-10px] right-[-2px] text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
             {basket.length}
            </span>
          </NavLink>
        </div>
        
        {/*input search*/}
        <input 
          type="text" 
          placeholder="Search" 
          className="border-white-100 px-1 py-0.5 bg-emerald-600 text-black placeholder:text-white"
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
        
        {/* Links */}
        <div className="hidden md:flex space-x-6 ">
          {links.map(({ id, title, href }) => (
            <NavLink
              key={id}
              to={href}
              className={({ isActive }) =>
                `text-xl ${isActive ? 'text-black' : 'text-white'} hover:text-yellow-300`
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
        {/*mobil menu*/}
        {isMenuOpen && (
        <div className="md:hidden absolute top-17 right-0 w-50 px-10 py-5 bg-green-800 z-1 ">
          <div className="space-y-4">
            {links.map(({ id, title, href }) => (
              <NavLink
                key={id}
                to={href}
                className={({ isActive }) =>
                  `block text-xl ${isActive ? 'text-black' : 'text-white'} hover:text-yellow-300`
                }
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      )}

        {/* Hamburger Icon (Mobile View) */}
        <div className="md:hidden sx:block">
          <button onClick={toggleMenu} className="text-white">
           
          {isMenuOpen ? (
              <HiX size={30} /> //x iconu
            ) : (
              <HiOutlineMenuAlt3 size={30} /> // hamburger icon
            )}
          </button>
        </div>
      </div>  
        
      </div>
  );
};

export default Header;
