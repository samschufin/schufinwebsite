import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full"></div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {/* Send Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Book a Meeting with Me
              </h3>
              <button 
                className="bg-[#29ABE2] text-white px-6 py-2 rounded-full hover:bg-[#1B8DBF] transition-colors font-medium shadow-md hover:shadow-lg"
                onClick={() => window.open('https://calendly.com/sam-schufin', '_blank')}
              >
                Calendar
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#29ABE2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Reach out on LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/sam-schufin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#29ABE2] hover:text-[#1B8DBF] transition-colors font-medium italic"
              >
                www.linkedin.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 