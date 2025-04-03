import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Header from "../../layout/Header"
import Footer from "../../layout/Footer" 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    alert('Message Sent!');
  };

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center ">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-4xl w-full ">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="py-2 px-4 border border-gray-500 rounded"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="py-2 px-4 border border-gray-500 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="py-2 px-4 border border-gray-500 rounded"
            value={formData.message}
            onChange={handleChange}
            rows="3"
          />
          <button
            type="submit"
            className="bg-green-700 text-white font-semibold py-2 px-6 rounded-full text-lg hover:text-amber-300 transition-colors"
          >
            Send Message
          </button>
        </form>
       </div>
       <Link to="/" className=" sm: text-xl font-bold mx-[10%] mt-5 text-black "> Back to All Product</Link>
     </div>
     <Footer/>
    </>
  );
};

export default Contact;
