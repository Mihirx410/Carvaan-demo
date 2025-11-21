import Image from 'next/image';

/**
 * Start Your Journey section component
 * Features hero image, image grid, CTA button, and promotional section
 */
export default function StartYourJourney() {
  // Placeholder images for the grid (5 images)
  const gridImages = [
    { id: 1, alt: 'Mountain adventure' },
    { id: 2, alt: 'Beach destination' },
    { id: 3, alt: 'Desert landscape' },
    { id: 4, alt: 'City exploration' },
    { id: 5, alt: 'Hiking trail' }
  ];

  return (
    <section className="relative bg-white">
      {/* Hero Image Section */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[832px]">
        <Image
          src="/about/start_journy.png"
          alt="Couple looking at world map"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Image Grid Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-[1350px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Top Row - Image 1 (261px), Image 2 (535px), Image 3 (261px) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {/* Image 1 */}
              <div
                className="relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: '261px', height: '356px' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-sm text-gray-400">Image 1</span>
                </div>
              </div>
              
              {/* Image 2 */}
              <div
                className="relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: '535px', height: '357px' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-sm text-gray-400">Image 2</span>
                </div>
              </div>
              
              {/* Image 3 */}
              <div
                className="relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: '261px', height: '356px' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-sm text-gray-400">Image 3</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Row - Image 4 (535px), Image 5 (535px) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {/* Image 4 */}
              <div
                className="relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: '535px', height: '357px' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-sm text-gray-400">Image 4</span>
                </div>
              </div>
              
              {/* Image 5 */}
              <div
                className="relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: '535px', height: '357px' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-sm text-gray-400">Image 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Start Your Journey Button */}
          <div className="flex justify-center">
            <button className="bg-[#ffbd59] text-[#AE4A84] font-bold px-10 md:px-10 py-4 md:py-5 rounded-full text-xl md:text-3xl shadow-lg hover:shadow-xl transition-all hover:brightness-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Section - Full width gradient with padding inside */}
      <div 
        className="px-4 mx-10 rounded-xl sm:px-6 md:px-8 lg:px-12 xl:px-16"
        style={{
          background: 'linear-gradient(to bottom, #B03272 0%, #D57466 50%, #F9B559 100%)',
          paddingTop: '3rem',
          paddingBottom: '3rem'
        }}
      >
        <div className="max-w-[1350px] mx-auto text-center">
          {/* Text Content */}
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8"
            style={{ 
              lineHeight: '1.3'
            }}
          >
            Stay in the Loop.
            <br />
            Get Exclusive Trip Drops + Rewards.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="bg-[#ffbd59] text-[#AE4A84] font-bold px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-xl shadow-lg hover:shadow-xl transition-all hover:brightness-105">
              Explore Trips
            </button>
            <button className="bg-[#ffbd59] text-[#AE4A84] font-bold px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-xl shadow-lg hover:shadow-xl transition-all hover:brightness-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

