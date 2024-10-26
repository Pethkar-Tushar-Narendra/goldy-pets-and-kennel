import React, { useState } from 'react';

const SellerInfoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    sellerName: '',
    sellerEmail: '',
    sellerPhone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="sellerName">
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              value={formData.sellerName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="sellerEmail">
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              value={formData.sellerEmail}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="sellerPhone">
              Seller Phone
            </label>
            <input
              type="tel"
              id="sellerPhone"
              name="sellerPhone"
              value={formData.sellerPhone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerInfoModal;
