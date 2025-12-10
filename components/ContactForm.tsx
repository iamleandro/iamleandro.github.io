import React, { useState } from 'react';
import { CONTACT_EMAIL } from '../constants';
import { MailIcon } from './Icons';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessUrl: '',
    revenue: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`Business Acquisition Inquiry: ${formData.businessUrl || 'New Lead'}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Business URL: ${formData.businessUrl}
Current Monthly Revenue: ${formData.revenue}

Message:
${formData.message}
    `);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-slate-900 p-8 text-white">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <MailIcon className="w-6 h-6 text-blue-400" />
          Get in Touch
        </h3>
        <p className="text-slate-300">
          Fill out the form below to start a confidential conversation about your business.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="businessUrl" className="text-sm font-medium text-slate-700">Business URL</label>
            <input
              type="url"
              id="businessUrl"
              name="businessUrl"
              required
              value={formData.businessUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="https://mybusiness.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="revenue" className="text-sm font-medium text-slate-700">Monthly Revenue (Est.)</label>
            <input
              type="text"
              id="revenue"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="$2,000 / month"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">Additional Details</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Tell us a bit about your tech stack, traffic sources, or why you are selling..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform active:scale-[0.99]"
        >
          Send Inquiry
        </button>
        
        <p className="text-xs text-center text-slate-400 mt-4">
          By submitting, your email client will open with a pre-filled message.
        </p>
      </form>
    </div>
  );
};