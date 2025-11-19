import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import HowItWorks from '@/components/HowItWorks';
import ExploreDestinations from '@/components/ExploreDestinations';
import MoreThanTravel from '@/components/MoreThanTravel';
import CommunityStories from '@/components/CommunityStories';
import BuildCustomTrip from '@/components/BuildCustomTrip';
import PlanSmarter from '@/components/PlanSmarter';
import TravelPaysBack from '@/components/TravelPaysBack';
import Footer from '@/components/Footer';

/**
 * Home page component
 * Layout matches the design image with all sections in order
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section with Overlapping Search Bar */}
        <div className="relative">
          <Hero />
          {/* Search Bar - Positioned to overlap bottom of hero image */}
          <div className="relative z-20 -mt-12 md:-mt-16 px-2 sm:px-4 lg:px-6">
            <SearchBar />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="pt-16 bg-gray-50">
          <HowItWorks />
        </div>

        {/* Explore Your Dream Destination Section */}
        <ExploreDestinations />

        {/* More Than Travel Banner Section */}
        <MoreThanTravel />

        {/* Carvaan Community & Stories Section */}
        <CommunityStories />

        {/* Build Your Custom Trip Section */}
        <BuildCustomTrip />

        {/* PLAN SMARTER. TRAVEL BETTER. Banner Section */}
        <PlanSmarter />

        {/* TRAVEL THAT PAYS YOU BACK Section */}
        <TravelPaysBack />
      </main>

      <Footer />
    </div>
  );
}
