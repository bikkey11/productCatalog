import React, { useState } from 'react';
import Product from './product';
import { dummyData } from './Data/productData';


const ProductCard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(dummyData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='bg-gradient-to-r from-gray-200 to-gray-400 py-8'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold mb-8">Product Catalog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-between mt-8">
                <button
                    onClick={handlePreviousPage}
                    className={`px-4 py-2 bg-gray-800 text-white rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className={`px-4 py-2 bg-gray-800 text-white rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
