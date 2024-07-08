import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => {
      navigate(`/productDetail/${product.id}`)
    }} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img className="w-full h-48 object-cover rounded" src={product.thumbnail} alt={product.name} />
      <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
      <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
