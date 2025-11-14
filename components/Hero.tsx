export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden z-0">
      {/* Background Image - Ancient building/palace with rounded corners */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl mx-4 mt-0 mb-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)',
        }}
      >
        {/* Gradient Overlay - Purple (left) to Orange/Brown (right) */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(to right, rgba(139, 69, 139, 0.7), rgba(139, 90, 43, 0.7))'
          }}
        ></div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase">
          ONE MARKETPLACE.
          <br />
          ENDLESS GROUP TRIPS.
          <br />
          <span className="relative inline-block">
            ZERO STRESS.
            {/* Yellow underline highlight - hand-drawn style */}
            <span 
              className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow-400"
              style={{ 
                clipPath: 'polygon(2% 0%, 98% 0%, 96% 100%, 4% 100%)',
                zIndex: -1,
                opacity: 0.9
              }}
            ></span>
          </span>
        </h1>
        
        {/* Tagline - White text, no background box */}
        <p className="text-white text-lg md:text-xl mt-8 font-medium">
          From Solo to Squad, Carvaan has your back.
        </p>
      </div>
    </section>
  );
}

