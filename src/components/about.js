import React from 'react';

const About = () => {
    return (
        <div id='aboutUs' className='bg-gradient-to-r from-gray-200 to-gray-400 py-8 min-h-screen'>
            <div className="  py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
                        <p className="text-gray-700 mb-6">
                            Welcome to our e-commerce site! We are dedicated to providing you with the best products and services. Our mission is to offer high-quality products at affordable prices while ensuring excellent customer service.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Our team is passionate about what we do, and we are committed to delivering a seamless shopping experience for our customers. We carefully select our products to ensure they meet our high standards and we continuously strive to improve and expand our offerings.
                        </p>
                        <p className="text-gray-700 mb-6">
                            We believe in building strong relationships with our customers, and we value your feedback and suggestions. Please feel free to reach out to us with any questions or concerns.
                        </p>
                        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                        <p className="text-gray-700 mb-6">
                            Our team is made up of dedicated professionals who are passionate about e-commerce and customer satisfaction. We work tirelessly to ensure that you have a great shopping experience on our site.
                        </p>
                        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Quality: We prioritize high-quality products and services.</li>
                            <li>Affordability: We strive to offer products at competitive prices.</li>
                            <li>Customer Service: We are dedicated to providing excellent customer service.</li>
                            <li>Integrity: We conduct our business with honesty and transparency.</li>
                        </ul>
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-700">
                            If you have any questions or need further information, please visit our <a href="/contact" className="text-blue-500 hover:underline">Contact Us</a> page. We look forward to hearing from you!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
