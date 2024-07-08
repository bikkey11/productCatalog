import React from 'react';
import { useCart } from './utils/cartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img className="w-full h-48 object-cover rounded" src={product.thumbnail} alt={product.name} />
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleRemove(product.id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
