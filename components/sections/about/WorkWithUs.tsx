import Image from 'next/image';

/**
 * Work With Us section component
 * Features team member cards and call-to-action button
 * Magenta background with white cards
 */
export default function WorkWithUs() {
  const teamMembers = [
    {
      name: 'Ashima Bansal',
      title: 'Founder',
      description: "Ashima is the founder of Carvaan and a seasoned travel curator with a Master's in Events Management from Leeds Beckett University, UK. Having travelled to 25+ countries & led 100+ group trips, she now brings her on-ground expertise to Carvaan - India's first group trip marketplace simplifying how travelers discover and book group experiences.",
      image: '/about/workwith_us_1.png'
    },
    {
      name: 'Nikhil Bansal',
      title: 'Co-Founder',
      description: 'A corporate banker turned travel entrepreneur, Nikhil has worked with Citibank and explored over 25 countries across the globe. Passionate about understanding consumer behaviour, he founded this platform to blend his love for travel and insight into what people truly seek in experiences - authentic, effortless and memorable journeys.',
      image: '/about/workwith_us_2.png'
    }
  ];

  return (
    <section className="relative bg-[#ae4a84] py-16 md:py-24 rounded-md">
      <div className="max-w-[1350px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Heading */}
        <h2 
          className="font-bold text-center mb-12 md:mb-16 uppercase text-3xl md:text-4xl lg:text-[55px]"
          style={{
            lineHeight: '150%',
            color: '#FFF9F1',
            letterSpacing: '-0.011em'
          }}
        >
          WE'RE TRAVELERS FIRST,
          <br />
          PROFESSIONALS SECOND.
        </h2>

        {/* Team Member Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 mb-12 md:mb-16 justify-center items-stretch">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center text-center"
              style={{
                width: '359px',
                height: '429px',
                borderRadius: '50px',
                padding: '32px',
                boxSizing: 'border-box'
              }}
            >
              {/* Member Image */}
              <div 
                className="mb-2 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '130px',
                  height: '130px'
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Name */}
              <h3 
                className="mb-1 flex-shrink-0"
                style={{
                  fontSize: '20px',
                  lineHeight: '150%',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '-0.011em'
                }}
              >
                {member.name}
              </h3>

              {/* Title */}
              <p 
                className="mb-4 flex-shrink-0"
                style={{
                  fontSize: '16px',
                  lineHeight: '150%',
                  fontWeight: 600,
                  color: '#80094E',
                  letterSpacing: '-0.011em'
                }}
              >
                {member.title}
              </p>

              {/* Description */}
              <p 
                className="flex-grow max-w-[266px]"
                style={{
                  fontSize: '12px',
                  lineHeight: '150%',
                  fontWeight: 500,
                  color: '#403335',
                  letterSpacing: '-0.011em',
                  textAlign: 'center'
                }}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <button 
            className="font-bold shadow-lg hover:shadow-xl transition-all hover:brightness-105 w-[261px] h-[71px] text-xl md:text-2xl lg:text-[32px]"
            style={{
              backgroundColor: '#FFBD59',
              borderRadius: '28.4px',
              lineHeight: '150%',
              color: '#AE4A84',
              letterSpacing: '-0.011em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
}

