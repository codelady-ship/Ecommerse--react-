import React from 'react';
import { Link } from 'react-router-dom';  
import Header from "../../layout/Header"
import Footer from "../../layout/Footer"
const Services = () => {
  return (
    <>
      <Header/>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-6xl w-full">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            We provide a wide range of services designed to help you succeed. Below are the core services we offer.
          </p>

          {/* Service 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Consulting Services</h2>
            <p className="text-lg text-gray-700">
              Our consulting services are designed to help you navigate through complex challenges and achieve your business goals. 
              We offer personalized solutions to meet your unique needs and ensure long-term success.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Product Development</h2>
            <p className="text-lg text-gray-700">
              We specialize in developing innovative products that meet the needs of your customers. Whether it's a physical product or a digital solution, we can bring your ideas to life.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Digital Marketing</h2>
            <p className="text-lg text-gray-700">
              Our digital marketing team is here to help you grow your brand and reach your target audience. From SEO and social media marketing to paid advertising, we offer comprehensive strategies that deliver measurable results.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Customer Support</h2>
            <p className="text-lg text-gray-700">
              We understand the importance of customer satisfaction. Our customer support team is here to assist you with any inquiries, troubleshooting, and post-sale support to ensure your experience with our products and services is exceptional.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Training & Workshops</h2>
            <p className="text-lg text-gray-700">
              We offer professional training and workshops tailored to your industry. Whether you need team training or individual sessions, we provide hands-on education to help you and your team stay ahead in the market.
            </p>
          </div>
          <Link to="/" className=" sm: text-xl font-bold m-[10%] text-white "> <button className='px-2 py-1 rounded-2xl bg-green-500 hover:text-amber-300 '>Back to All Product</button> </Link>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Services;
