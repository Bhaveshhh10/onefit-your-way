
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Onefit</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're on a mission to make professional fitness guidance accessible to everyone in India.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Onefit began in 2023 when our founders, a group of fitness enthusiasts and tech professionals, recognized a gap in India's fitness market. While gym memberships were common, personalized training remained exclusive and expensive.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to democratize access to quality fitness coaching by creating a platform that connects users with certified freelance trainers at affordable rates. Our goal was simple: make personalized fitness guidance accessible to everyone, regardless of their location or budget.
              </p>
              <p className="text-gray-600">
                Today, Onefit hosts over 500 verified trainers across major Indian cities, serving thousands of clients daily through both in-person and online sessions.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Onefit founders" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            To empower every Indian with access to affordable, personalized fitness coaching that fits their unique goals, schedule, and budget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-onefit-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making professional fitness guidance available to everyone, regardless of location or economic background.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-onefit-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalization</h3>
              <p className="text-gray-600">
                Creating fitness experiences tailored to individual needs, not one-size-fits-all solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-onefit-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Building a supportive ecosystem of trainers and fitness enthusiasts across India.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1619380061814-58f7170a5215?q=80&w=1374&auto=format&fit=crop" 
                alt="Onefit CEO" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Vikram Mehta</h3>
              <p className="text-onefit-blue mb-2">Co-founder & CEO</p>
              <p className="text-gray-600 text-sm">Former fitness coach with 10+ years in the wellness industry</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1623330188314-8f4645626731?q=80&w=1374&auto=format&fit=crop" 
                alt="Onefit CTO" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Neha Sharma</h3>
              <p className="text-onefit-blue mb-2">Co-founder & CTO</p>
              <p className="text-gray-600 text-sm">Tech leader with experience at leading Indian startups</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1594824486598-7c85a2c15ebb?q=80&w=1587&auto=format&fit=crop" 
                alt="Head of Trainer Relations" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Rajesh Agarwal</h3>
              <p className="text-onefit-blue mb-2">Head of Trainer Relations</p>
              <p className="text-gray-600 text-sm">Former national-level athlete and fitness educator</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=1480&auto=format&fit=crop" 
                alt="Chief Nutritionist" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Dr. Priya Kapoor</h3>
              <p className="text-onefit-blue mb-2">Chief Nutritionist</p>
              <p className="text-gray-600 text-sm">PhD in Nutrition with specialization in Indian diets</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Onefit Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for a fitness trainer or are a trainer looking to grow your client base, Onefit is built for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Find a Trainer
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-blue-600">
              Become a Trainer
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
