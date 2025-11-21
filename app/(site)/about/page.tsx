import Header from '@/components/shared/Header';
import Hero from '@/components/sections/about/Hero';
import OurStory from '@/components/sections/about/OurStory';
import OurMission from '@/components/sections/about/OurMission';
import WorkWithUs from '@/components/sections/about/WorkWithUs';
import MarketplacePromise from '@/components/sections/about/MarketplacePromise';
import StartYourJourney from '@/components/sections/about/StartYourJourney';
import Footer from '@/components/shared/Footer';

/**
 * About Us page component
 * Displays all About Us sections in order
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <Hero />

        {/* Our Story Section */}
        <OurStory />

        {/* Our Mission Section */}
        <OurMission />

        {/* Work With Us Section */}
        <WorkWithUs />

        {/* The Marketplace Promise Section */}
        <MarketplacePromise />

        {/* Start Your Journey Section */}
        <StartYourJourney />
      </main>

      <Footer />
    </div>
  );
}

