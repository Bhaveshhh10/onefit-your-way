
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "499",
      period: "month",
      description: "Perfect for beginners looking to start their fitness journey.",
      features: [
        "2 Sessions per week",
        "Basic Diet Plan",
        "In-app messaging",
        "Progress tracking"
      ],
      isPopular: false
    },
    {
      name: "Plus Plan",
      price: "999",
      period: "month",
      description: "Our most popular plan for dedicated fitness enthusiasts.",
      features: [
        "4 Sessions per week",
        "Advanced Diet Plan",
        "WhatsApp Trainer Support",
        "Progress tracking",
        "Weekly check-ins"
      ],
      isPopular: true
    },
    {
      name: "Premium Plan",
      price: "1499",
      period: "month",
      description: "The ultimate fitness experience for maximum results.",
      features: [
        "Unlimited Sessions",
        "Personalized Diet + Grocery Planner",
        "Priority Trainer Access",
        "24/7 Support",
        "Monthly fitness assessments",
        "Video analysis"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose a plan that works for you. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.isPopular ? 'ring-2 ring-onefit-blue relative' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="bg-onefit-blue text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-8 ${
                    plan.isPopular 
                      ? 'bg-onefit-blue hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-onefit-green flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your team or organization?
          </p>
          <Button variant="outline" className="border-onefit-blue text-onefit-blue hover:bg-blue-50">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
