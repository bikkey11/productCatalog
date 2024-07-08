import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useCart } from './utils/cartContext';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  const { cart  } = useCart();
  console.log(cart)
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-slate-700-500 to-slate-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-white">
                <span className="font-bold">E-Commerce</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-5 px-3 text-white hover:text-gray-200">Home</Link>
              <Link to="#aboutUs" className="py-5 px-3 text-white hover:text-gray-200">About</Link>
              <Link to="#contact" className="py-5 px-3 text-white hover:text-gray-200">Contact</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/login" className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300">Login</a>
            <a href="/signup" className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300">Sign Up</a>
            <div onClick={()=>navigate("/shoppingCart")} className='text-white text-2xl px-3 py-2 relative cursor-pointer'>
              <FaShoppingCart />
              <div className=' absolute -top-2 right-0 bg-white text-black flex items-center justify-center text-sm font-bold rounded-full h-6 w-6'>{cart.length}</div>

            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
            <div onClick={()=>navigate("/shoppingCart")} className='text-white text-2xl pl-4 pr-3 py-2 relative cursor-pointer'>
              <FaShoppingCart />
              <div className=' absolute -top-2 right-0 bg-white text-black flex items-center justify-center text-sm font-bold rounded-full h-6 w-6'>{cart?.length}</div>

            </div>
            
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500`}>
        <a href="/" className="block py-2 px-4 text-sm text-white hover:text-black hover:bg-gray-200">Home</a>
        <Link to="#aboutUs" className="block py-2 px-4 text-sm text-white hover:text-black hover:bg-gray-200">About</Link>
        <Link to="#contact" className="block py-2 px-4 text-sm text-white hover:text-black hover:bg-gray-200">Contact</Link>
        <a href="/login" className="block py-2 px-4 text-sm text-white hover:text-black hover:bg-gray-200">Login</a>
        <a href="/signup" className="block py-2 px-4 text-sm text-white hover:text-black hover:bg-gray-200">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
