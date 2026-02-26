import { BadgeCheck, Clock, DollarSign, Users } from 'lucide-react';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Certified & Licensed',
    description: 'All our technicians are certified, licensed, and fully insured for your peace of mind.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Emergency plumbing issues don\'t wait. Neither do we. Available day and night.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Honest quotes upfront. Competitive rates for superior service.'
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Highly trained professionals with years of experience in all plumbing systems.'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-secondary to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black animate-fadeInUp">
            Why Choose General Drain Cleaning?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            We're committed to providing the highest standard of professional plumbing services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex p-4 bg-primary/20 rounded-lg">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-black mb-3">{reason.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-xl p-12 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-black mb-4">Ready to Experience the Difference?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Contact us today for professional, reliable plumbing services. Your satisfaction is our guarantee.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
