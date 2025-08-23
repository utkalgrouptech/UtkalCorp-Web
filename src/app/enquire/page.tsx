'use client';

import { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-sky-100 to-blue-200 px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8 drop-shadow-sm">
          🚀 Inquiry Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-blue-500" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-blue-500" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-3.5 text-blue-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3.5 text-blue-500" />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full pl-12 pr-4 py-3 h-32 rounded-xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Inquiry
          </button>

          {/* Status */}
          {status === 'success' && (
            <p className="text-green-600 text-center font-medium pt-2">
              ✅ Your inquiry has been submitted!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center font-medium pt-2">
              ⚠️ Please fill in all fields.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
