import Image from 'next/image';

const destinations = [
  { city: 'Ubud Bali', country: 'Indonesia', image: '/travel_market.png' },
  { city: 'Raja Ampat', country: 'Indonesia', image: '/3rd.png' },
  { city: 'Komodo Island', country: 'Indonesia', image: '/travel_market.png' },
  { city: 'Ubud Bali', country: 'Indonesia', image: '/travel_market.png' },
  { city: 'Raja Ampat', country: 'Indonesia', image: '/travel_market.png' }
];

export default function ExploreDestinations() {
  return (
    <section className="relative overflow-hidden bg-[#061839] text-white">
      <div className="absolute inset-0">
        <Image
          src="/explore.png"
          alt="Dream destination background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02112b]/40 via-[#061839]/70 to-[#061839]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-14 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-wide text-white sm:text-[52px] lg:text-[56px] lg:leading-[1.12] drop-shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
            <span className="block">EXPLORE YOUR DREAM</span>
            <span className="block">DESTINATION WITH US</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16">
          <div className="flex-1 min-w-0 w-full max-w-[460px]">
            <div className="flex h-[240px] flex-col justify-center space-y-10 sm:h-[280px] lg:h-[320px]">
              <div className="rounded-[24px] bg-[#b04081] px-6 py-8 shadow-[0px_35px_55px_rgba(0,0,0,0.45)]">
                <p className="text-xl font-medium text-white">
                  Make the experience of traveling to your dream tourist destination come true with us. We will
                  provide the best experience of your life.
                </p>
              </div>

              <div className="w-full rounded-[999px] bg-white/95 mb-[-20px] mt-4 pl-5 pr-2 py-2 shadow-[0px_25px_45px_rgba(0,0,0,0.35)]">
                <label className="sr-only" htmlFor="explore-search">
                  Search destination
                </label>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-[#b04081]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    id="explore-search"
                    type="text"
                    placeholder="Explore here..."
                    className="flex-1 bg-transparent text-base text-[#1c2645] placeholder:text-[#7a7a7a] focus:outline-none"
                  />
                  <button className="rounded-[999px] bg-[#f7b74c] px-5 py-2 text-base font-semibold text-[#5c2d4d] shadow-[0_12px_25px_rgba(247,183,76,0.45)] transition hover:brightness-105">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end min-w-0 w-full max-w-[580px]">
            <div className="relative h-[240px] w-full overflow-hidden sm:h-[280px] lg:h-[320px]">
              <Image src="/explore2.png" alt="Indonesia island aerial view" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-[1224px] lg:flex-nowrap">
            {destinations.map((destination, index) => (
              <div
                key={`${destination.city}-${index}`}
                className="flex-shrink-0 relative"
                style={{
                  width: '232px',
                  height: '279px'
                }}
              >
                <div
                  className="absolute inset-0 rounded-md overflow-hidden"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                  }}
                >
                  <div className="relative w-full h-40 overflow-hidden rounded-t-md">
                    <img
                      src={destination.image}
                      alt={`${destination.city}, ${destination.country}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-black font-semibold mb-4 leading-tight">
                      <p>{destination.city}</p>
                      <p className="opacity-90">{destination.country}</p>
                    </div>

                    <button className="w-full bg-[#ffbd59] text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#ffa726] transition-colors">
                      <span>Read More</span>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="#ffbd59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

