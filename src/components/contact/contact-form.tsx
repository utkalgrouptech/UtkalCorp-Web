"use client"

import type React from "react"
import { useState } from "react"
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Random success/failure for demo
      const isSuccess = Math.random() > 0.2
      
      if (isSuccess) {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-gray-100">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg mb-4">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Get In Touch</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Ready to discuss your metal trading requirements? Send us a message and our team will contact you shortly.
          </p>
        </div>

        {/* Status Messages */}
        {submitSuccess && (
          <div className="mb-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-lg flex items-center animate-in slide-in-from-top duration-500">
            <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
            <div>
              <div className="font-semibold">Message Sent Successfully!</div>
              <div className="text-green-100 text-sm">We'll get back to you within 24 hours.</div>
            </div>
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg flex items-center animate-in slide-in-from-top duration-500">
            <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0" />
            <div>
              <div className="font-semibold">Submission Failed</div>
              <div className="text-red-100 text-sm">Please try again or contact us directly.</div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 flex items-center">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Full Name
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 shadow-sm group-hover:shadow-md"
                  placeholder="Enter your full name"
                  required
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/30 pointer-events-none transition-all duration-300"></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 flex items-center">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Email Address
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 shadow-sm group-hover:shadow-md"
                  placeholder="your.email@company.com"
                  required
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/30 pointer-events-none transition-all duration-300"></div>
              </div>
            </div>

            {/* Phone Field */}
            <div className="group">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Phone Number
                </span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-md"
                  placeholder="+91 98765 43210"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 pointer-events-none transition-all duration-300"></div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="group">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-3 flex items-center">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Inquiry Type
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 shadow-sm group-hover:shadow-md appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="text-gray-400">Select inquiry type</option>
                  <option value="General Inquiry" className="text-gray-800">General Inquiry</option>
                  <option value="Business Partnership" className="text-gray-800">Business Partnership</option>
                  <option value="Product Information" className="text-gray-800">Product Information</option>
                  <option value="Career Opportunities" className="text-gray-800">Career Opportunities</option>
                  <option value="Technical Support" className="text-gray-800">Technical Support</option>
                  <option value="Other" className="text-gray-800">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/30 pointer-events-none transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="group">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-3 flex items-center">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Your Message
              </span>
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 shadow-sm group-hover:shadow-md resize-none"
                placeholder="Please describe your requirements in detail..."
                required
              ></textarea>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/30 pointer-events-none transition-all duration-300"></div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                group relative px-8 py-4 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl"
                }
              `}
            >
              <div className="flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            We typically respond to all inquiries within 2-4 business hours
          </p>
        </div>
      </div>
    </div>
  )
}