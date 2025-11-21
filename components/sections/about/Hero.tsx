/**
 * About Us Hero section component with background image, headline, and tagline
 * Features a gradient overlay and highlighted text
 */
export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden z-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 mx-2 sm:mx-3 lg:mx-4 mt-0 mb-4 rounded-[40px] overflow-hidden">
        <img
          src="/about/hero.png"
          alt="Carvaan about us hero backdrop"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ lineHeight: '1.2' }}>
          We're More Than
          <br />
          a Travel Platform.
          <br />
          We're Your Travel Partner.
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto">
          Our story is about simplifying travel, building community, and making every journey unforgettable.
        </p>

        {/* CTA Button */}
        <button className="bg-[#ffbd59] text-[#ae4a84] font-bold px-8 md:px-4 py-3 md:py-1 rounded-xl md:text-2xl hover:bg-[#ffa726] transition-colors shadow-lg">
          Explore Trips
        </button>
      </div>
    </section>
  );
}

