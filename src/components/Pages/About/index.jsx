import React from 'react';
import { Link } from 'react-router-dom';  
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const About = () => {
  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-green-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>Our Boutigue</strong>, where our mission is to deliver exceptional products and services to our customers. 
            We are passionate about innovation, quality, and customer satisfaction. Founded in [Year], our company has been a leader in the [industry] industry, consistently striving to provide the best solutions tailored to the needs of our clients.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
          Our Boutigue started with a simple idea: to create high-quality, reliable products that can positively impact people’s lives. 
            What began as a small startup has now evolved into a trusted brand, known for its excellence in [product or service type]. Over the years, we’ve expanded our offerings, adding a variety of innovative products to our portfolio. 
            Our commitment to quality, integrity, and customer satisfaction has been the key to our growth.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 mb-4">
            We specialize in providing [describe your product or service offerings]. Our team of experts works relentlessly to ensure that each product is crafted to the highest standards of quality and precision. 
            Whether you're looking for [specific product/service], we have the right solution for you.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>Customer Focus: We put our customers first in everything we do.</li>
            <li>Innovation: We are committed to continuous improvement and innovation.</li>
            <li>Integrity: We maintain the highest standards of professionalism and integrity.</li>
            <li>Quality: We strive for excellence in every product and service we provide.</li>
            <li>Collaboration: We believe in working together to achieve great results.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At [Your Company Name], we believe in building long-term relationships with our clients. We’re more than just a business – we’re a partner you can rely on. 
            Our products are designed with the customer in mind, offering value, durability, and style. 
            Here’s why our clients trust us:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>Extensive Experience: [X] years of expertise in [industry].</li>
            <li>Customer Satisfaction: Over [Y] satisfied customers and counting.</li>
            <li>Affordable Pricing: Competitive rates for top-tier quality.</li>
            <li>Fast & Reliable Service: We prioritize timely deliveries and top-notch service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-gray-700 mb-4">
            Whether you're a long-time customer or someone new to our brand, we invite you to explore everything we have to offer. Stay connected with us through our website and social media channels 
            for the latest updates, new products, and exclusive offers. Join us as we continue our journey towards providing the best products and services in the [industry] industry.
          </p>
        </div>
        <Link to="/" className=" sm: text-xl font-bold m-[10%] text-black "> Back to All Product</Link>
      </div> 
    <Footer/>
    </>
  );
};

export default About;
