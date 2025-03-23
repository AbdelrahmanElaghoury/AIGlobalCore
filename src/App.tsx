import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SplineSceneBasic } from './components/hero-section';
import emailjs from '@emailjs/browser';

// Custom icon components for G2, G5, G7
const G2Icon = () => (
  <svg className="w-12 h-12 text-aigc-dark-red mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <text x="8" y="16" fontSize="10" fill="currentColor">G2</text>
  </svg>
);

const G5Icon = () => (
  <svg className="w-12 h-12 text-aigc-dark-red mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <text x="8" y="16" fontSize="10" fill="currentColor">G5</text>
  </svg>
);

const G7Icon = () => (
  <svg className="w-12 h-12 text-aigc-dark-red mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <text x="8" y="16" fontSize="10" fill="currentColor">G7</text>
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace these with your EmailJS credentials
    const serviceID = 'service_v97w9k5'; // From EmailJS dashboard
    const templateID = 'template_8rzipgl'; // From EmailJS dashboard
    const publicKey = '_cAdEEzN4bkql5iwC'; // From EmailJS dashboard

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-aigc-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-aigc-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/AIGlobalCore.png"
                alt="AIGlobalCore Logo"
                className="h-8 w-auto sm:h-10"
              />
              <span className="text-aigc-dark-blue text-lg sm:text-xl font-bold whitespace-nowrap">
                AIGlobalCore
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-base md:text-lg font-medium transition-colors ${activeSection === section ? 'text-aigc-dark-red' : 'text-aigc-dark-blue hover:text-aigc-dark-red'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-aigc-dark-blue hover:text-aigc-dark-red p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-aigc-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-2 py-2 text-base font-medium text-aigc-dark-blue hover:text-aigc-dark-red"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <SplineSceneBasic />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-aigc-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-aigc-dark-blue text-center mb-12">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="/assets/The_10_Global_Hotspots_of_Automation.jpg"
                alt="Technology Innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-aigc-dark-blue mb-6">
                Welcome to AIGlobalCore, straight out of Brooklyn, NY, where bold ideas and relentless innovation collide. We're not your average American company; we're a powerhouse blending the latest AI automation technology with creative marketing strategies.
              </p>
              <p className="text-lg text-aigc-dark-blue mb-6">
                Our mission? To help you crush your business goals and leave your competitors wondering how you pulled it off.
              </p>
              <p className="text-lg text-aigc-dark-blue mb-6">
                The result? A business that runs like a well-oiled machine, freeing you to focus on growth while your competitors scramble to keep up. With our expertise in AI and marketing, we're currently helping huge businesses to dominate their markets.
              </p>
              <p className="text-lg text-aigc-dark-blue">
                Ready to rewrite the rules? Let's make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-aigc-dark-blue text-center mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: G2Icon,
                title: 'G2 Package',
                features: [
                  'Traditional Social Media Management',
                  'Website Maintenance',
                ],
              },
              {
                icon: G5Icon,
                title: 'G5 Package',
                features: [
                  'AI-Assisted Social Media',
                  'Fully Renovated Website',
                  'AI Phone System',
                  'Automated WhatsApp Responses',
                  'Business Development Consultancy',
                ],
              },
              {
                icon: G7Icon,
                title: 'G7 Package',
                features: [
                  'AI-Assisted Social Media',
                  'Fully Renovated Website',
                  'Mobile App',
                  'Automated WhatsApp Responses',
                  'AI Phone System',
                  'Full Business Development',
                  'Sales Trainings',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-aigc-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon />
                <h3 className="text-xl font-bold text-aigc-dark-blue mb-3">
                  {service.title}
                </h3>
                <ul className="text-gray-600 list-disc list-inside">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-aigc-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-aigc-dark-blue text-center mb-12">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-aigc-dark-blue">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-aigc-dark-blue shadow-sm focus:border-aigc-dark-blue focus:ring focus:ring-aigc-dark-blue focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-aigc-dark-blue">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-aigc-dark-blue shadow-sm focus:border-aigc-dark-blue focus:ring focus:ring-aigc-dark-blue focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-aigc-dark-blue">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-aigc-dark-blue shadow-sm focus:border-aigc-dark-blue focus:ring focus:ring-aigc-dark-blue focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-aigc-dark-red text-aigc-white px-6 py-3 rounded-lg font-medium hover:bg-aigc-dark-blue transition-colors"
              >
                Submit
              </button>
              {status && <p className="text-center text-aigc-dark-blue mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2">
              <img
                src="/assets/AIGlobalCore.png"
                alt="AIGlobalCore Logo"
                className="h-6 w-auto sm:h-8"
              />
              <span className="text-aigc-dark-blue text-base sm:text-xl font-bold whitespace-nowrap">
                AIGlobalCore
              </span>
            </div>

            {/* Address and Copyright */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-xs sm:text-sm text-aigc-dark-blue text-center">
                123 Innovation Lane, Brooklyn, NY 11201, USA
              </p>
              <p className="text-xs sm:text-sm text-aigc-dark-blue text-center">
                © 2024 AIGlobalCore. All Rights Reserved.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/aiglobalcore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/assets/Insta_logo.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://x.com/aiglobalcore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/assets/X_logo.png"
                  alt="X Platform"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;