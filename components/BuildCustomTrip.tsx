import Image from 'next/image';

/**
 * Build Your Custom Trip section component
 * Features header with building blocks, search/filter interface, and destination cards
 */
export default function BuildCustomTrip() {
  const destinations = [
    {
      city: 'Ubud Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Raja Ampat',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Komodo Island',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Ubud Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Raja Ampat',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="relative bg-white">
      {/* Heading Section */}
      <div className="relative w-full" style={{ height: '399px' }}>
        <div className="absolute inset-0 bg-[#ae4a84] flex items-center justify-center">
          {/* Centered Container with Building Blocks and Title */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Building Blocks Graphic */}
            <Image
              src="/build_custom.png"
              alt="Building blocks"
              width={220}
              height={150}
              className="object-contain"
            />
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
              Build Your Custom Trip
            </h2>
          </div>
        </div>
      </div>

      {/* Search/Filter Interface Section */}
      <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-16">
        <div 
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mx-auto"
          style={{ maxWidth: '1155px', minHeight: '201px' }}
        >
          {/* Instructional Text */}
          <p className="text-base md:text-lg font-bold text-[#1a1a1a] mb-6 text-center md:text-left">
            Choose your budget, duration, squad type & vibe → get instant matches.
          </p>

          {/* Input Fields Row */}
          <div className="flex flex-col md:flex-row gap-4 items-end">
            {/* Destination */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                defaultValue="INDONESIA"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ae4a84] text-gray-800"
              />
            </div>

            {/* Budget */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Budget</label>
              <input
                type="text"
                placeholder=".........."
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ae4a84] text-gray-800"
              />
            </div>

            {/* Leaving on */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Leaving on</label>
              <input
                type="text"
                defaultValue="Fri, 15 March"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ae4a84] text-gray-800"
              />
            </div>

            {/* Returning on */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Returning on</label>
              <input
                type="text"
                defaultValue="Mon, 18 March"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ae4a84] text-gray-800"
              />
            </div>

            {/* Squad Type */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Squad Type</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ae4a84] text-gray-800 pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="3" fill="#1a1a1a" />
                    <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              className="w-full md:w-16 h-16 bg-[#ae4a84] rounded-lg flex items-center justify-center hover:bg-[#b04081] transition-colors shadow-lg"
              aria-label="Search"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
                <path d="m20 20-4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Destination Cards Section */}
      <div className="py-12 px-4 md:px-16">
        <div className="flex flex-wrap justify-center gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{
                width: '232px',
                height: '279px'
              }}
            >
              {/* Card Background */}
              <div
                className="absolute inset-0 rounded-md overflow-hidden"
                style={{
                  backgroundColor: '#AE4A84',
                  borderRadius: '6px'
                }}
              >
                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden rounded-t-md">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text Section */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-semibold mb-4 leading-tight">
                    <p>{destination.city}</p>
                    <p className="opacity-90">{destination.country}</p>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-[#ffbd59] text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#ffa726] transition-colors">
                    <span>Read More</span>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#ffbd59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
