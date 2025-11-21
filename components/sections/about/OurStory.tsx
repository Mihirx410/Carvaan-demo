import Image from 'next/image';

/**
 * Our Story section component
 * Features text content on the left and image on the right
 * Magenta background with white text
 */
export default function OurStory() {
  return (
    <section className="relative bg-[#ae4a84] py-16 md:py-24 overflow-hidden">
      <div className="relative flex flex-col lg:flex-row lg:items-center">
        {/* Left Side - Text Content */}
        <div className="flex-1 w-full lg:max-w-[50%] text-white mb-8 lg:mb-0 px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-[1350px] mx-auto lg:mx-0">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 uppercase">
              OUR STORY
            </h2>

            {/* First Paragraph */}
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
              Carvaan was born out of frustration with messy trip planning, multiple agents, endless calls, and scattered tabs. We wanted one place where solo travelers, squads, families, and captains could come together. That's how Carvaan became a marketplace curated, simple, and community-powered.
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
              Today, we're not just a platform, we're a revolution in group travel. A place where memories begin with a click.
            </p>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#ff8a00] to-[#ffbd59] text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all hover:brightness-105">
              Join the Carvaan Community
            </button>
          </div>
        </div>

        {/* Right Side - Image (Flush to right edge) */}
        <div className="flex-1 w-full lg:w-[50%] lg:flex-shrink-0">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] lg:h-full lg:min-h-[600px]">
            <Image
              src="/about/our_story.png"
              alt="Couple looking at mountains"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

