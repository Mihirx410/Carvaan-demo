/**
 * Build Your Custom Trip section component
 * Features 5 horizontally scrollable destination cards
 */
export default function BuildCustomTrip() {
  const destinations = [
    {
      title: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038'
    },
    {
      title: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073'
    },
    {
      title: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094'
    },
    {
      title: 'New York',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070'
    },
    {
      title: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ae4a84] text-center mb-12 uppercase">
          Build Your Custom Trip
        </h2>

        {/* Horizontally Scrollable Cards */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div
                  className="relative h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {destination.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

