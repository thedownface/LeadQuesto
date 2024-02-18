import React, { useState } from "react";
import { Navbar2, Footer } from "../components";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your server or API here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="relative z-0 bg-primary">
      <Navbar2 />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-40 mr-20">
          <div className="md:pr-12">
            <h3 className="text-2xl font-bold">Our Address</h3>
            <p className="text-gray-500">
              123 Main Street
              <br />
              Anytown, CA 12345
            </p>
            <h3 className="text-2xl font-bold mt-4">Email Address</h3>
            <p className="text-gray-500">info@leadquesto.com</p>
            <h3 className="text-2xl font-bold mt-4">Telephone Number</h3>
            <p className="text-gray-500">+1 (800) 555-1212</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-500 mb-8">
              We'd love to hear from you. Please fill out the form below to send
              us a requirement, and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Company Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">
                  Requirement
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
