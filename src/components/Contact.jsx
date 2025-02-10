import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300 outline-none"
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300 outline-none"
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300 outline-none"
              id="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
