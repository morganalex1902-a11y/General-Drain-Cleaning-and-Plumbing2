import Image from 'next/image';
import { ArrowRight, Phone, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/van-blue-night.jpg"
          alt="Professional drain cleaning service van"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 animate-fadeInUp [animation-delay:0.1s] opacity-0 [animation-fill-mode:both]">
              <Clock size={16} />
              <span className="text-sm font-bold">24/7 Emergency Services</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black text-secondary leading-tight animate-fadeInUp [animation-delay:0.2s] opacity-0 [animation-fill-mode:both]">
                Professional Drain Cleaning & <span className="text-primary">Plumbing</span> Solutions
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fadeInUp [animation-delay:0.3s] opacity-0 [animation-fill-mode:both]">
                Trusted by thousands of Philadelphia homeowners and businesses. Fast, reliable, and professional service when you need it most. Serving the region for years with certified technicians.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp [animation-delay:0.4s] opacity-0 [animation-fill-mode:both]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 hover:shadow-2xl transition-all shadow-lg duration-300 transform hover:scale-105"
              >
                <span>Get Help Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:215-917-6718"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300 animate-fadeInUp [animation-delay:0.5s] opacity-0 [animation-fill-mode:both]">
              <div>
                <div className="text-3xl font-black text-primary">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">2K+</div>
                <div className="text-sm text-gray-600">Customers Served</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden lg:block relative">
            <div className="relative z-10">
              <Image
                src="/images/technician.jpg"
                alt="Professional plumbing technician"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-sm font-bold text-secondary">Certified & Insured</div>
                <div className="text-xs text-gray-600 mt-1">Licensed professional service with 24/7 availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
