/**
 * Hero section component with background image, headline, and tagline
 * Features a gradient overlay and highlighted text
 */
export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden z-0">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl mx-2 sm:mx-3 lg:mx-4 mt-0 mb-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)',
        }}
      >
        {/* Gradient Overlay - Purple to Orange/Brown */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(to right, rgba(139, 69, 139, 0.7), rgba(139, 90, 43, 0.7))'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase" style={{ lineHeight: '1.1' }}>
          ONE MARKETPLACE.
          <br />
          ENDLESS GROUP TRIPS.
          <br />
          <span className="relative inline-block">
            ZERO STRESS.
            {/* Yellow Underline - Hand-drawn Style */}
            <span 
              className="absolute -bottom-2 left-0 right-0 h-4 bg-[#ffbd59]"
              style={{ 
                clipPath: 'polygon(2% 0%, 98% 0%, 96% 100%, 4% 100%)',
                zIndex: -1,
                opacity: 0.9
              }}
            />
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl mt-12 md:mt-16 font-medium bg-[#ffbd59] text-[#ae4a84] rounded-full px-8 md:px-12 py-2 inline-block">
          From Solo to Squad, Carvaan has your back.
        </p>
      </div>
    </section>
  );
}

