import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="relative">
          <Hero />
          {/* Search Bar positioned to overlap bottom of hero image */}
          <div className="relative z-20 -mt-12 md:-mt-16 px-4 sm:px-6 lg:px-8">
            <SearchBar />
          </div>
        </div>
        <div className="pt-16 bg-gray-50">
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
}
