/**
 * HowItWorks component displaying the process steps
 * Features four cards with icons, titles, and descriptions
 */
export default function HowItWorks() {
  // Brand color for buttons
  const logoColor = '#ae4a84'; 
  
  // Card rotation angles for polaroid effect
  const rotations = ['-4deg', '2deg', '-2deg', '3deg'];
  
  // Step data for each card (4 cards as per design)
  const steps = [
    {
      title: 'Search & Compare',
      description: 'multiple group captains, agents & providers in one place.',
      bgColor: '#ae4a84',
      textColor: 'text-white',
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L4 8L12 13L20 8L12 3Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1"/>
          <line x1="4" y1="8" x2="12" y2="13" stroke="#FBBF24" strokeWidth="2"/>
          <line x1="20" y1="8" x2="12" y2="13" stroke="#FBBF24" strokeWidth="2"/>
          <circle cx="4" cy="8" r="3" fill="#FFD700" stroke="#D97706" strokeWidth="1"/>
          <circle cx="20" cy="8" r="3" fill="#FFD700" stroke="#D97706" strokeWidth="1"/>
          <line x1="12" y1="13" x2="12" y2="21" stroke="#FBBF24" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Filter & Choose',
      description: 'by destination, budget, squad size, vibe.',
      bgColor: '#ffbd59',
      textColor: 'text-[#ae4a84]',
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#000000" strokeWidth="2" fill="none"/>
          <path d="M9 12L11 14L15 10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Earn Carvaan Coins',
      description: 'travel now, save for your next.',
      bgColor: '#ae4a84',
      textColor: 'text-white',
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="10" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1"/>
          <circle cx="12" cy="10" r="5" fill="#FFD700"/>
          <circle cx="12" cy="14" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1" opacity="0.8"/>
          <circle cx="12" cy="14" r="5" fill="#FFD700" opacity="0.8"/>
          <text x="12" y="12" textAnchor="middle" fontSize="10" fill="#000" fontWeight="bold">$</text>
        </svg>
      )
    },
    {
      title: 'Book in 1 Click',
      description: 'no messy agents. no multiple tabs.',
      bgColor: '#ffbd59',
      textColor: 'text-[#ae4a84]',
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#000000" strokeWidth="2" fill="none"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="#000000" strokeWidth="2"/>
          <path d="M9 16L11 18L15 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ae4a84] text-center mb-12 uppercase">
          HOW CARVAAN WORKS
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {steps.map((step, index) => (
            <div key={index} className="flex justify-center">
              <div
                className="rounded-xl border-[10px] border-white shadow-[0px_12px_35px_rgba(0,0,0,0.18)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 flex flex-col w-full"
                style={{ transform: `rotate(${rotations[index]})` }}
              >
                {/* Card Header - Colored Section with Title and Icon */}
                <div
                  className="flex-1 flex flex-col items-center justify-center text-center p-6"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <h3 className={`text-xl md:text-4xl font-bold mb-3 ${step.textColor}`}>
                    {step.title}
                  </h3>
                  {step.icon}
                </div>

                {/* Card Footer - Description */}
                <div className="px-4 py-3 bg-white">
                  <p className="text-black text-xs md:text-sm text-center font-bold leading-tight">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <button
            className="text-white px-6 py-2 rounded-lg text-[18px] font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: logoColor }}
          >
            Explore Trips
          </button>
          
          <button
            className="text-white px-6 py-2 rounded-lg text-[18px] font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: logoColor }}
          >
            Plan My Custom Trip
          </button>
        </div>
      </div>
    </section>
  );
}