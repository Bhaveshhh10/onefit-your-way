
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Fitness. Your Way.<br />
              <span className="text-onefit-blue">Anytime, Anywhere.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Connect with freelance fitness trainers who match your style, schedule, and goals. Affordable plans. Personalized results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-onefit-blue hover:bg-blue-600 text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-onefit-blue text-onefit-blue hover:bg-blue-50 text-lg py-6 px-8">
                Find My Trainer
              </Button>
            </div>

            {/* Quick Search Bar */}
            <div className="mt-12 bg-white p-4 rounded-lg shadow-lg max-w-md">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <div className="pl-4">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for trainers, specialties..."
                  className="w-full py-3 px-4 focus:outline-none"
                />
                <button className="bg-onefit-blue text-white py-3 px-6 hover:bg-blue-600 transition-colors">
                  Search
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Weight Loss</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Strength</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Yoga</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Online</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
              alt="Trainer coaching a client"
              className="rounded-lg shadow-xl object-cover h-full max-h-[600px] w-full animate-fade-in"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-onefit-green rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">95%</span>
                </div>
                <div>
                  <p className="font-semibold">Trainer Match Rate</p>
                  <p className="text-sm text-gray-500">Find your perfect trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
