import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Philadelphia Homeowner',
    content: 'When our main drain backed up, we called General and they were here within an hour. Professional, knowledgeable, and the problem was solved quickly. Highly recommend!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We use General for all our commercial plumbing needs. Their 24/7 service has saved us countless times. Trustworthy and reliable professionals.',
    rating: 5
  },
  {
    name: 'Jennifer Martinez',
    role: 'Delaware County Resident',
    content: 'The technicians explained everything they were doing and provided honest recommendations. No unnecessary upselling, just great service at fair prices.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 animate-fadeInUp">
            <span className="text-sm font-bold">Client Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Thousands of satisfied customers throughout Philadelphia and surrounding areas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-black text-secondary">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
