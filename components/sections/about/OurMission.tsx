import Image from 'next/image';

/**
 * Our Mission section component
 * Features 4 tilted boxes with icons and descriptions
 * White background with magenta border at bottom
 */
export default function OurMission() {
  // Rotation angles for each box
  const rotations = ['-3deg', '2deg', '-2deg', '3deg'];
  
  // Mission boxes data
  const missions = [
    {
      text: 'Simplify group travel planning with one marketplace.',
      borderColor: '#ffbd59', // Yellow
      icon: '/about/mission1.png' // Placeholder - user will replace with SVG
    },
    {
      text: 'Build a vibrant community of captains, agents, and explorers.',
      borderColor: '#ae4a84', // Magenta
      icon: '/about/mission2.png' // Placeholder - user will replace with SVG
    },
    {
      text: 'Reward loyalty with Carvaan Coins that make travel accessible.',
      borderColor: '#ffbd59', // Yellow
      icon: '/about/mission3.png' // Placeholder - user will replace with SVG
    },
    {
      text: 'Create sustainable, meaningful journeys that connect people.',
      borderColor: '#ae4a84', // Magenta
      icon: '/about/mission4.png' // Placeholder - user will replace with SVG
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 border-b-4 border-[#ae4a84]">
      <div className="max-w-[1350px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ae4a84] text-center mb-12 md:mb-16 uppercase">
          OUR MISSION
        </h2>

        {/* Mission Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {missions.map((mission, index) => (
            <div key={index} className="flex justify-center">
              <div
                className="bg-white rounded-lg p-6 shadow-[0px_12px_35px_rgba(0,0,0,0.15)] flex flex-col items-center text-center border-4"
                style={{ 
                  transform: `rotate(${rotations[index]})`,
                  borderColor: mission.borderColor
                }}
              >
                {/* Icon Container */}
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* Placeholder for icon - user will replace with SVG */}
                    <span className="text-xs text-gray-400">Icon {index + 1}</span>
                  </div>
                </div>

                {/* Text */}
                <p className="text-black text-sm md:text-base font-medium leading-relaxed">
                  {mission.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Goal Paragraph */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            <span className="font-bold text-[#ae4a84]">Our goal is simple:</span>{' '}
            <span className="text-[#ae4a84] opacity-90">
              to become India's most trusted travel marketplace by turning stressful planning into stress-free adventures and rewarding every traveler along the way.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}


