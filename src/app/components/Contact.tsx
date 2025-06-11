'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    selectedOptions: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const multipleChoiceOptions = [
    "I usually make business decisions based on gut instinct, but I know I should be using financial data to back them up.",
    "I&apos;ve got questions about the future of my business.",
    "My business is making money, but I don&apos;t have a clear picture of why, how, or how to keep it growing.",
    "I&apos;m too busy running my business, I need help tracking my numbers.",
    "I&apos;m finally ready to take my finances seriously and need help doing it right.",
    "Honestly, I don&apos;t even know where to start."
  ];

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(option)
        ? prev.selectedOptions.filter(item => item !== option)
        : [...prev.selectedOptions, option]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          selectedOptions: []
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-start pt-20 pb-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-60 h-1 bg-[#29ABE2] mx-auto rounded-full"></div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* Send Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Send Me an Email
              </h3>
              <a 
                href="mailto:sam@schufin.com" 
                className="text-[#29ABE2] hover:text-[#1B8DBF] transition-colors font-medium italic"
              >
                sam@schufin.com
              </a>
            </div>
          </div>

          {/* Call or Text */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Call or Text me
              </h3>
              <a 
                href="tel:307-264-2122" 
                className="text-[#29ABE2] hover:text-[#1B8DBF] transition-colors font-medium"
              >
                307-264-2122
              </a>
            </div>
          </div>

          {/* Book a Meeting */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Book a Meeting
              </h3>
              <button 
                className="bg-[#29ABE2] text-white px-4 py-1.5 rounded-full hover:bg-[#1B8DBF] transition-colors font-medium shadow-md hover:shadow-lg text-sm"
                onClick={() => window.open('https://cal.com/sam.schufin', '_blank')}
              >
                Calendar
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-3">
              <div className="w-12 h-12 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Find Me on LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/sam-schuhler/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#29ABE2] hover:text-[#1B8DBF] transition-colors font-medium italic text-sm"
              >
                www.linkedin.com
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form Section */}
        <div className="max-w-6xl mx-auto">
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              or send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Two Column Layout */}
              <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
                
                {/* Left Column - Multiple Choice Section */}
                <div className="lg:flex-[5] flex flex-col">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    What best describes where you&apos;re at right now?
                  </h4>
                  
                  <div className="space-y-3">
                    {multipleChoiceOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleCheckboxChange(option)}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.selectedOptions.includes(option)
                            ? 'bg-[#29ABE2] border-2 border-[#29ABE2] text-white'
                            : 'bg-gray-100/5 dark:bg-gray-200/3 text-gray-700 dark:text-gray-200 hover:bg-gray-100/15 dark:hover:bg-gray-200/8'
                        }`}
                      >
                        <span className="text-sm leading-relaxed">
                          {option}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Form Fields */}
                <div className="space-y-6 lg:flex-[3] flex flex-col">
                  {/* Message Section */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Message"
                      required
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-lg shadow-md transition-all duration-300 ease-out ${
                        isSubmitting
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                          : 'text-[#29ABE2] bg-transparent border-2 border-[#29ABE2]/50 hover:bg-[#29ABE2]/10 hover:border-[#29ABE2] hover:shadow-[#29ABE2]/20 hover:shadow-lg'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Sending...' : 'Send It'}
                        {!isSubmitting && (
                          <svg 
                            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                        )}
                      </span>
                      {!isSubmitting && (
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#29ABE2] transition-all duration-300 ease-out group-hover:w-full"></span>
                      )}
                    </button>
                  </div>
                </div>
              </div>



              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 rounded-lg">
                  Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 