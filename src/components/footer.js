import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-lg font-bold">E-Commerce</h2>
            <p className="mt-2">© 2023 E-Commerce. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="/about" className="hover:underline">About</a>
            <a href="/shop" className="hover:underline">Shop</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.016 3.676 9.156 8.438 9.88v-6.99H7.898v-2.89h2.54V9.578c0-2.507 1.492-3.89 3.78-3.89 1.096 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.771-1.63 1.563v1.876h2.772l-.444 2.89h-2.328v6.99C18.324 21.156 22 17.016 22 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937a9.593 9.593 0 01-2.828.775 4.936 4.936 0 002.164-2.724 9.735 9.735 0 01-3.127 1.195 4.908 4.908 0 00-8.384 4.476A13.897 13.897 0 011.671 3.149a4.903 4.903 0 001.523 6.574 4.936 4.936 0 01-2.224-.616c-.053 2.281 1.58 4.416 3.947 4.893a4.902 4.902 0 01-2.213.084c.623 1.952 2.435 3.375 4.584 3.415a9.867 9.867 0 01-6.1 2.105c-.397 0-.787-.023-1.17-.067a13.987 13.987 0 007.548 2.213c9.054 0 14.004-7.504 14.004-14.004 0-.213-.005-.425-.014-.636a9.936 9.936 0 002.457-2.548z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.756 0 8.329.015 7.052.07 5.775.125 4.632.344 3.678 1.298 2.724 2.252 2.505 3.395 2.45 4.672 2.394 5.949 2.379 6.376 2.379 12s.015 6.051.07 7.328c.055 1.277.274 2.42 1.228 3.374.954.954 2.097 1.173 3.374 1.228 1.277.055 1.704.07 7.328.07s6.051-.015 7.328-.07c1.277-.055 2.42-.274 3.374-1.228.954-.954 1.173-2.097 1.228-3.374.055-1.277.07-1.704.07-7.328s-.015-6.051-.07-7.328c-.055-1.277-.274-2.42-1.228-3.374C19.42 2.274 18.277 2.055 17 2c-1.277-.055-1.704-.07-7.328-.07S8.329.015 7.052.07C5.775.125 4.632.344 3.678 1.298 2.724 2.252 2.505 3.395 2.45 4.672 2.394 5.949 2.379 6.376 2.379 12s.015 6.051.07 7.328c.055 1.277.274 2.42 1.228 3.374.954.954 2.097 1.173 3.374 1.228 1.277.055 1.704.07 7.328.07s6.051-.015 7.328-.07c1.277-.055 2.42-.274 3.374-1.228.954-.954 1.173-2.097 1.228-3.374.055-1.277.07-1.704.07-7.328s-.015-6.051-.07-7.328c-.055-1.277-.274-2.42-1.228-3.374-.954-.954-2.097-1.173-3.374-1.228C15.671.015 15.244 0 12 0z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.324a4.163 4.163 0 110-8.325 4.163 4.163 0 010 8.325zM18.406 3.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
