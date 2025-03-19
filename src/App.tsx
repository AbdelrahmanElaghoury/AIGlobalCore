import React, { useState } from 'react';
import { Menu, X, Brain, Database, LineChart, ChevronRight, Flag } from 'lucide-react';
import { SplineSceneBasic } from './components/hero-section';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-aigc-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-aigc-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/assets/AIGlobalCore.png"
                alt="AIGlobalCore Logo"
                className="h-10 w-auto"
              />
              <span className="text-aigc-dark-blue text-xl font-bold ml-2">AIGlobalCore</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-lg font-medium transition-colors ${activeSection === section ? 'text-aigc-dark-red' : 'text-aigc-dark-blue hover:text-aigc-dark-red'
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-aigc-dark-blue hover:text-aigc-dark-red"
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
                  className="block w-full text-left px-3 py-2 text-base font-medium text-aigc-dark-blue hover:text-aigc-dark-red"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-aigc-dark-blue text-center mb-12">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                alt="Technology Innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-aigc-dark-blue mb-6">
                At AIGlobalCore, we're proud to be at the forefront of American innovation in artificial intelligence. Based in the heart of Silicon Valley, we combine cutting-edge technology with American ingenuity to create AI solutions that drive global progress.
              </p>
              <p className="text-lg text-aigc-dark-blue">
                Our team of expert engineers and researchers is committed to developing responsible AI technologies that enhance business efficiency, improve daily life, and maintain America's leadership in technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-aigc-dark-blue text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Automation',
                description: 'Custom AI models and algorithms tailored to your specific business needs.',
              },
              {
                icon: Database,
                title: 'Digital Marketing',
                description: 'Expert guidance on implementing AI solutions in your organization.',
              },
              {
                icon: LineChart,
                title: 'AI Driven Solutions',
                description: 'Advanced analytics and insights powered by cutting-edge AI technology.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-aigc-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon
                  className="w-12 h-12 text-aigc-dark-red mb-4"
                />
                <h3 className="text-xl font-bold text-aigc-dark-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-aigc-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-aigc-dark-blue text-center mb-12">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-aigc-dark-blue">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  className="mt-1 block w-full rounded-md border-aigc-dark-blue shadow-sm focus:border-aigc-dark-blue focus:ring focus:ring-aigc-dark-blue focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-aigc-dark-red text-aigc-white px-6 py-3 rounded-lg font-medium hover:bg-aigc-dark-blue transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-aigc-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/assets/AIGlobalCore.png"
                alt="AIGlobalCore Logo"
                className="h-8 w-auto mr-2"
              />
              <span className="text-xl font-bold text-aigc-dark-blue">AIGlobalCore</span>
            </div>
            <p className="text-sm text-aigc-dark-blue">
              © 2024 AIGlobalCore. Proudly Made in the USA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;