
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Onefit?</h2>
          <p className="section-subtitle">
            Onefit makes fitness simple. We connect you with top freelance trainers, both online and offline. 
            Whether you want to lose weight, build muscle, or just feel healthier — you'll find the right match with Onefit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
              alt="People in virtual fitness class"
              className="rounded-lg shadow-lg object-cover w-full h-[500px]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              We believe in personalized fitness journeys
            </h3>
            <p className="text-gray-600 mb-6">
              At Onefit, we understand that everyone's fitness journey is unique. That's why we've built a platform that connects you with trainers who create plans tailored specifically to your needs, goals, and lifestyle.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onefit-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Trainers</h4>
                  <p className="text-gray-600">All our trainers are certified and vetted for quality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onefit-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Powered Diet Planner</h4>
                  <p className="text-gray-600">Get customized nutrition plans based on your fitness goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-onefit-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Sessions</h4>
                  <p className="text-gray-600">Choose between in-person or online training sessions.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/about" 
                className="text-onefit-blue hover:underline font-semibold flex items-center"
              >
                Learn more about us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
