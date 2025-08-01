import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend API (Express + Mongoose)
      const response = await axios.post('http://localhost:5000/api/contact', formData); // Updated URL to match your backend route

      // Handle success response
      setResponseMessage(response.data.message); // Show success message
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
      setErrorMessage(''); // Reset error message
    } catch (error) {
      // Handle error response
      setErrorMessage('Error submitting your message. Please try again later.');
      setResponseMessage(''); // Clear success message
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg border border-orange-300">
        <h1 className="text-3xl font-semibold text-center text-orange-600 mb-6">Contact Us</h1>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-6 text-center text-lg text-green-500">{responseMessage}</p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-6 text-center text-lg text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;

