
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section for pricing */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose a plan that works for you. No hidden fees, cancel anytime. All plans include access to our certified trainers.
          </p>
        </div>
      </section>
      
      {/* Main pricing section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I change my plan later?</h3>
              <p className="text-gray-600">Yes! You can upgrade, downgrade or cancel your plan at any time through your account settings.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How do online sessions work?</h3>
              <p className="text-gray-600">Online sessions are conducted via video call. You'll receive a link before your scheduled session time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What if I miss a session?</h3>
              <p className="text-gray-600">You can reschedule a session up to 12 hours before the scheduled time at no extra cost.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I try before I subscribe?</h3>
              <p className="text-gray-600">Yes, we offer a free consultation session with one of our trainers before you commit to a plan.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Ready to start your fitness journey?</h3>
            <Button className="bg-onefit-blue hover:bg-blue-600 px-10 py-6 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Plan Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-4 px-6 text-left text-gray-500 font-semibold">Features</th>
                  <th className="py-4 px-6 text-center text-gray-500 font-semibold">Starter</th>
                  <th className="py-4 px-6 text-center text-gray-500 font-semibold">Plus</th>
                  <th className="py-4 px-6 text-center text-gray-500 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6 text-gray-800">Sessions per week</td>
                  <td className="py-4 px-6 text-center">2</td>
                  <td className="py-4 px-6 text-center">4</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Diet Plan</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Personalized + Grocery List</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Trainer Support</td>
                  <td className="py-4 px-6 text-center">In-app messaging</td>
                  <td className="py-4 px-6 text-center">WhatsApp Support</td>
                  <td className="py-4 px-6 text-center">Priority 24/7 Access</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Check-ins</td>
                  <td className="py-4 px-6 text-center">Monthly</td>
                  <td className="py-4 px-6 text-center">Weekly</td>
                  <td className="py-4 px-6 text-center">Daily</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Progress Tracking</td>
                  <td className="py-4 px-6 text-center text-green-600"><CheckCircle2 className="h-5 w-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-green-600"><CheckCircle2 className="h-5 w-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-green-600"><CheckCircle2 className="h-5 w-5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Video Analysis</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center text-green-600"><CheckCircle2 className="h-5 w-5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Price</td>
                  <td className="py-4 px-6 text-center font-semibold">₹499/month</td>
                  <td className="py-4 px-6 text-center font-semibold">₹999/month</td>
                  <td className="py-4 px-6 text-center font-semibold">₹1499/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
