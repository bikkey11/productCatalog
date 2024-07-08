import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData } from './Data/productData';
import { useCart } from './utils/cartContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = dummyData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img className="w-full md:w-1/2 h-64 object-cover rounded-lg" src={product.thumbnail} alt={product.title} />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-4">${product.price.toFixed(2)}</p>
            <p className="mt-4">{product.description}</p>
            <button
              onClick={() => {
                addToCart(product)
                toast("Item added sucessfully")

              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductDetail;
