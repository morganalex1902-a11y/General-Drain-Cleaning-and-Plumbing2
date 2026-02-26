import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/van-blue-night.jpg',
    alt: 'Professional service van',
    span: 'md:col-span-2'
  },
  {
    src: '/images/van-red-white.jpg',
    alt: 'Team vehicle',
    span: 'md:col-span-1'
  },
  {
    src: '/images/sewer-inspection.jpg',
    alt: 'Sewer camera inspection',
    span: 'md:col-span-1'
  },
  {
    src: '/images/hydro-jetting.jpg',
    alt: 'Hydro jetting service',
    span: 'md:col-span-2'
  },
  {
    src: '/images/emergency-drain-work.jpg',
    alt: 'Emergency drain service',
    span: 'md:col-span-1'
  },
  {
    src: '/images/sewer-maintenance.jpg',
    alt: 'Sewer maintenance',
    span: 'md:col-span-1'
  },
  {
    src: '/images/technician.jpg',
    alt: 'Professional technician',
    span: 'md:col-span-2'
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 animate-fadeInUp">
            <span className="text-sm font-bold">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            Quality Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            See examples of our professional plumbing services and installations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`${image.span} relative rounded-xl overflow-hidden group cursor-pointer animate-scaleIn`}
              style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
