import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Resources */}
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="/getting-started" className="hover:text-white">Getting Started</a></li>
              <li><a href="/training-materials" className="hover:text-white">Training Materials</a></li>
              <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
              <li><a href="/safety-resources" className="hover:text-white">Safety Resources</a></li>
              <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          {/* Platform */}
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/global-compliance" className="hover:text-white">Global Compliance</a></li>
              <li><a href="/system-requirements" className="hover:text-white">System Requirements</a></li>
              <li><a href="/downloads" className="hover:text-white">Downloads</a></li>
              <li><a href="/pricing-plans" className="hover:text-white">Pricing Plans</a></li>
            </ul>
          </div>
          {/* Community */}
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">COMMUNITY</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="hover:text-white">Events</a></li>
              <li><a href="/workshops" className="hover:text-white">Workshops</a></li>
              <li><a href="/webinars" className="hover:text-white">Webinars</a></li>
              <li><a href="/partnerships" className="hover:text-white">Partnerships</a></li>
              <li><a href="/customer-stories" className="hover:text-white">Customer Stories</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} S.E.I International | All rights reserved
          </p>
          {/* Privacy Links */}
          <div className="flex space-x-6 text-sm">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
