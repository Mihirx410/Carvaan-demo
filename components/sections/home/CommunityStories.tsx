'use client';

/**
 * Community & Stories section component
 * Displays testimonial cards with selectable highlight state
 */
import { useState } from 'react';

const stories = [
  {
    name: 'Samira Hadid',
    role: 'Adventure Host',
    story:
      '“Carvaan matched me with the perfect crew for an unforgettable Himalayan escape. Planning took minutes.”',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800',
    rating: 5
  },
  {
    name: 'Marceline Anderson',
    role: 'Community Lead',
    story:
      '“From curated itineraries to ready-made group chats, everything felt effortless. I can’t wait for the next trip.”',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200',
    rating: 5
  },
  {
    name: 'Hannah Morales',
    role: 'Content Creator',
    story:
      '“My followers got the inside scoop on each destination thanks to Carvaan’s detailed guides and hosts.”',
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    rating: 5
  },
  {
    name: 'Isabel Mercado',
    role: 'Solo Explorer',
    story:
      '“Joined a strangers-to-friends trip to Lisbon. The reviews, hosts, and perks made it the smoothest booking ever.”',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800',
    rating: 5
  }
];

export default function CommunityStories() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f25] mb-4">
          Carvaan Community & Stories
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>

        <div className="relative flex items-center justify-center gap-6 min-h-[440px] px-4">
          {stories.map((story, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={story.name}
                onClick={() => setActiveIndex(index)}
                className={`text-left bg-[#FFFAFA] rounded-2xl transition-all duration-300 ease-in-out focus:outline-none shadow-[8px_8px_20px_rgba(0,0,0,0.12),-8px_8px_20px_rgba(0,0,0,0.12),0px_8px_20px_rgba(0,0,0,0.12)] flex-shrink-0 flex flex-col ${
                  isActive
                    ? 'w-[334px] h-[440px] px-8 py-10 z-10'
                    : 'w-[265px] h-[349px] px-6 py-8 hover:opacity-90'
                }`}
              >
                <div
                  className="rounded-xl overflow-hidden mx-auto mb-5 flex-shrink-0 transition-all duration-300"
                  style={{
                    width: isActive ? '96px' : '80px',
                    height: isActive ? '96px' : '80px'
                  }}
                >
                  <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
                </div>

                {/* FIX APPLIED HERE */}
                <div
                  className="flex flex-col mx-auto flex-shrink-0 transition-all duration-300"
                  style={{
                    width: '100%',
                    maxWidth: isActive ? '260px' : '230px'
                  }}
                >
                  <h3
                    className="font-semibold text-[#2d1f25] text-center transition-all duration-300"
                    style={{
                      fontSize: isActive ? '1.5rem' : '1.25rem',
                      lineHeight: isActive ? '2rem' : '1.75rem',
                      marginBottom: isActive ? '0.5rem' : '0.25rem'
                    }}
                  >
                    {story.name}
                  </h3>

                  <p
                    className="text-gray-500 text-center transition-all duration-300"
                    style={{
                      fontSize: isActive ? '1rem' : '0.875rem',
                      lineHeight: isActive ? '1.5rem' : '1.25rem',
                      marginBottom: isActive ? '1.25rem' : '1rem'
                    }}
                  >
                    {story.role}
                  </p>

                  <p
                    className="text-gray-600 leading-relaxed text-center overflow-hidden transition-all duration-300"
                    style={{
                      fontSize: isActive ? '1rem' : '0.875rem',
                      lineHeight: isActive ? '1.5rem' : '1.25rem',
                      marginBottom: isActive ? '1.75rem' : '1.5rem'
                    }}
                  >
                    {story.story}
                  </p>
                </div>

                <div className="flex justify-center gap-1 flex-shrink-0">
                  {Array.from({ length: story.rating }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="text-[#ffbd59] transition-all duration-300"
                      style={{
                        width: isActive ? '20px' : '16px',
                        height: isActive ? '20px' : '16px'
                      }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.86L12 17.77l-6.18 3.25L6.99 14.1 2 9.25l6.91-.99L12 2z" />
                    </svg>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        <button className="mt-12 inline-flex items-center justify-center rounded-full px-8 py-3 text-base md:text-lg font-semibold text-[#b04081] bg-[#ffbd59] shadow-[0px_12px_30px_rgba(255,189,89,0.4)]">
          Join the Carvaan Community
        </button>
      </div>
    </section>
  );
}
