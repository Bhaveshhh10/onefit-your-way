
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const TrainerSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    specialization: "",
    experience: "",
    price: "",
    location: "",
    isOnline: false,
  });

  // Mock trainers data
  const trainers = [
    {
      id: 1,
      name: "Arjun Singh",
      specialization: "Weight Loss",
      experience: "5 years",
      rating: 4.8,
      price: "₹800/session",
      isOnline: true,
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?q=80&w=1480&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Priya Patel",
      specialization: "Yoga",
      experience: "7 years",
      rating: 4.9,
      price: "₹900/session",
      isOnline: true,
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      specialization: "Strength Training",
      experience: "4 years",
      rating: 4.6,
      price: "₹750/session",
      isOnline: false,
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Ananya Desai",
      specialization: "HIIT",
      experience: "3 years",
      rating: 4.7,
      price: "₹700/session",
      isOnline: true,
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1374&auto=format&fit=crop"
    }
  ];

  // Filter trainers based on search query
  const filteredTrainers = trainers.filter(trainer => {
    if (searchQuery === "") return true;
    return trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           trainer.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
           trainer.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Find Your Perfect Trainer</h1>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <div className="pl-4">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, specialization, or location..."
              className="w-full py-4 px-4 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-onefit-blue text-white py-4 px-8 h-full rounded-none hover:bg-blue-600">
              Search
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Weight Loss</span>
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Strength</span>
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Yoga</span>
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Online</span>
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">HIIT</span>
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Mumbai</span>
            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Delhi</span>
          </div>
        </div>

        {/* Filters and Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={filters.specialization}
                    onChange={(e) => setFilters({...filters, specialization: e.target.value})}
                  >
                    <option value="">All Specializations</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Strength Training">Strength Training</option>
                    <option value="HIIT">HIIT</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  >
                    <option value="">All Locations</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={filters.experience}
                    onChange={(e) => setFilters({...filters, experience: e.target.value})}
                  >
                    <option value="">Any Experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="4-6">4-6 years</option>
                    <option value="7+">7+ years</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="online-only"
                    type="checkbox"
                    className="h-4 w-4 text-onefit-blue border-gray-300 rounded"
                    checked={filters.isOnline}
                    onChange={(e) => setFilters({...filters, isOnline: e.target.checked})}
                  />
                  <label htmlFor="online-only" className="ml-2 block text-sm text-gray-700">
                    Online Sessions Only
                  </label>
                </div>
                
                <Button className="w-full bg-onefit-blue hover:bg-blue-600">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTrainers.length > 0 ? (
                filteredTrainers.map(trainer => (
                  <div key={trainer.id} className="bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover"
                      />
                      {trainer.isOnline && (
                        <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Online Available
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{trainer.name}</h3>
                        <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-gray-700">{trainer.rating}</span>
                        </div>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{trainer.specialization}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <span>{trainer.experience} experience</span>
                        <span className="mx-2">•</span>
                        <span>{trainer.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-gray-800">{trainer.price}</p>
                        <Button className="bg-onefit-blue hover:bg-blue-600">
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <p className="text-xl text-gray-500">No trainers found matching your criteria</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Reset Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainerSearch;
