import Image from 'next/image';
import { Droplet, Zap, Eye, Wrench } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning services for residential and commercial properties. We use advanced equipment to clear blockages and restore flow.',
    icon: Droplet,
    image: '/images/hydro-jetting.jpg',
    features: ['Hydro jetting', 'Snake cleaning', 'Chemical treatment']
  },
  {
    id: 2,
    title: 'Sewer Line Services',
    description: 'Complete sewer line assessment, repair, and replacement. We use the latest trenchless technology to minimize disruption.',
    icon: Wrench,
    image: '/images/sewer-maintenance.jpg',
    features: ['Line inspection', 'Repair & replacement', 'Preventative maintenance']
  },
  {
    id: 3,
    title: 'Sewer Camera Inspection',
    description: 'Advanced camera technology to diagnose blockages and damage without excavation. Detailed reports included.',
    icon: Eye,
    image: '/images/sewer-inspection.jpg',
    features: ['Real-time footage', 'Detailed report', 'HD video']
  },
  {
    id: 4,
    title: 'Emergency Services',
    description: 'Available 24/7 for emergency plumbing situations. Rapid response times and professional solutions when you need them most.',
    icon: Zap,
    image: '/images/emergency-drain-work.jpg',
    features: ['Rapid response', '24/7 availability', 'Professional team']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
            <span className="text-sm font-bold">Professional Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary">
            Comprehensive Plumbing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we provide expert solutions for all your plumbing needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-5 h-full">
                  {/* Image */}
                  <div className="sm:col-span-2 relative overflow-hidden bg-gray-200 h-[250px] sm:h-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="sm:col-span-3 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-black text-secondary">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
