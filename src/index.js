import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './components/utils/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <RouterProvider router={router} />

    </CartProvider>
);


