/**
 * More Than Travel banner section component
 * Features a large banner image with text overlay
 */
export default function MoreThanTravel() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden my-16">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070)',
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(139, 69, 139, 0.7), rgba(139, 90, 43, 0.7))'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase" style={{ lineHeight: '1.1' }}>
          More Than Travel.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase" style={{ lineHeight: '1.1' }}>
          A Marketplace That Works for You.
        </h3>
      </div>

      {/* Purple Background Section Below */}
      <div className="relative z-10 w-full bg-[#ae4a84] py-12 mt-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Experience travel like never before. Join thousands of travelers who trust Carvaan for their group adventures.
          </p>
        </div>
      </div>
    </section>
  );
}

