/**
 * The Marketplace Promise section component
 * Features 3 stacked promise blocks and a call-to-action button
 */
export default function MarketplacePromise() {
  const promises = [
    {
      title: 'For Travelers',
      description: 'Simplified bookings, stress-free planning.',
      bgColor: '#d8a7c7', // Light pink/lavender
      textColor: '#8b2e6a' // Dark magenta
    },
    {
      title: 'For Captains',
      description: 'Exposure, loyal squads, growth opportunities.',
      bgColor: '#ae4a84', // Dark magenta
      textColor: '#ffffff' // White
    },
    {
      title: 'For Agents',
      description: 'Marketplace visibility, digital-first solutions.',
      bgColor: '#f7b74c', // Orange/gold
      textColor: '#a06a00' // Dark orange/brown
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-[1350px] mx-auto px-2 sm:px-4 lg:px-6 mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ae4a84] text-center uppercase">
          THE MARKETPLACE PROMISE
        </h2>
      </div>

      {/* Promise Blocks Container - Flush to left edge */}
      <div className="flex flex-col items-start gap-0 mb-12 md:mb-16">
        {promises.map((promise, index) => {
          // Decreasing widths: 70%, 60%, 50%
          const widths = ['70%', '60%', '50%'];
          return (
            <div
              key={index}
              className="px-8 md:px-12 py-6 md:py-8 shadow-lg"
              style={{ 
                width: widths[index],
                backgroundColor: promise.bgColor,
                marginTop: index > 0 ? '-8px' : '0',
                borderTopRightRadius: '1rem',
                borderBottomRightRadius: '1rem'
              }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: promise.textColor }}
              >
                {promise.title}
              </h3>
              <p 
                className="text-lg md:text-xl"
                style={{ color: promise.textColor }}
              >
                {promise.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center px-2 sm:px-4 lg:px-6">
        <button
          className="bg-[#ae4a84] text-white font-bold px-10 md:px-16 py-4 md:py-5 rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transition-all hover:brightness-105"
        >
          Become a Captain/Partner
        </button>
      </div>
    </section>
  );
}

