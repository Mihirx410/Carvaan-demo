/**
 * Explore Destinations section component
 * Features 4 destination cards in a grid layout
 */
export default function ExploreDestinations() {
  const destinations = [
    {
      title: 'Mountain Adventures',
      description: 'Explore breathtaking peaks and scenic trails',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      title: 'Beach Paradise',
      description: 'Relax on pristine beaches and crystal waters',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073'
    },
    {
      title: 'City Escapes',
      description: 'Discover vibrant cultures and urban wonders',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2024'
    },
    {
      title: 'Cultural Journeys',
      description: 'Immerse yourself in rich traditions',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ae4a84] text-center mb-12 uppercase">
          EXPLORE YOUR DREAM DESTINATION WITH US
        </h2>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div
                className="relative h-64 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

