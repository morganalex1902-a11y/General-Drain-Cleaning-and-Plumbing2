'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mwpqkvdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 animate-fadeInUp">
                <span className="text-sm font-bold">Get In Touch</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-secondary animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                Contact Our Team
              </h2>
              <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                Need immediate assistance? Call us anytime. We're here to help with all your plumbing needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-black text-secondary mb-1">Phone</h3>
                  <a href="tel:215-917-6718" className="text-gray-600 hover:text-primary font-semibold">
                    (215) 917-6718
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Office</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-black text-secondary mb-1">Mobile</h3>
                  <a href="tel:267-788-2851" className="text-gray-600 hover:text-primary font-semibold">
                    (267) 788-2851
                  </a>
                  <p className="text-sm text-gray-500 mt-1">24/7 Emergency</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-black text-secondary mb-1">Email</h3>
                  <a href="mailto:info@generaldraincleaning.com" className="text-gray-600 hover:text-primary font-semibold">
                    info@generaldraincleaning.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-black text-secondary mb-1">Hours</h3>
                  <p className="text-gray-600 font-semibold">24/7 Available</p>
                  <p className="text-sm text-gray-500 mt-1">Emergency services anytime</p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-black text-secondary mb-4">Service Area</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We proudly serve Philadelphia, Delaware County, Chester County, and surrounding areas throughout the Greater Philadelphia region.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-black text-secondary mb-6">Send us a Message</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">Thank you! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(215) 555-0123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Drain Cleaning">Drain Cleaning</option>
                    <option value="Sewer Line Services">Sewer Line Services</option>
                    <option value="Camera Inspection">Camera Inspection</option>
                    <option value="Emergency Service">Emergency Service</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your plumbing issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                We respond to all inquiries within 24 hours. For emergencies, call (267) 788-2851.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
