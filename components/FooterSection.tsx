import { Phone, Mail, MapPin } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Emergency Banner */}
      <div className="bg-primary border-b border-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-black text-lg text-center sm:text-left">24/7 Emergency Drain Services</h3>
              <p className="text-sm text-red-100 text-center sm:text-left">When you need us most, we're here for you</p>
            </div>
            <a
              href="tel:267-788-2851"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all whitespace-nowrap"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Call Now: (267) 788-2851</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-2xl font-black">GENERAL</div>
              <div className="text-sm font-bold text-blue-200 tracking-widest">DRAIN CLEANING</div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Professional plumbing and drain cleaning services serving the Greater Philadelphia area with dedication to quality and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-black text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-black text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Drain Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Sewer Line Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Camera Inspection</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Emergency Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-black text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-white">(215) 917-6718</div>
                  <div className="text-xs">Office</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-white">(267) 788-2851</div>
                  <div className="text-xs">24/7 Emergency</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <div>
                  <a href="mailto:info@generaldraincleaning.com" className="hover:text-primary transition-colors">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Trust Badges */}
            <div className="space-y-2 text-sm text-blue-100">
              <div className="font-bold text-white">Licensed & Insured</div>
              <p>Fully licensed and insured professionals</p>
            </div>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="font-bold text-white">24/7 Service</div>
              <p>Always available for emergencies</p>
            </div>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="font-bold text-white">Satisfaction Guaranteed</div>
              <p>100% customer satisfaction promise</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-100">
          <p>
            &copy; {currentYear} General Drain Cleaning & Plumbing. All rights reserved. | Serving Philadelphia & Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  );
}
