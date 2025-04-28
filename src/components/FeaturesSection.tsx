
import { Search, Dumbbell, Wallet } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-onefit-blue" />,
      title: "Find Your Trainer Fast",
      description: "Browse profiles, read reviews, and pick the right fit for your fitness journey."
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-onefit-blue" />,
      title: "Personalized Plans",
      description: "Get tailored workout and diet schedules based on your unique goals and preferences."
    },
    {
      icon: <Wallet className="h-8 w-8 text-onefit-blue" />,
      title: "Flexible & Affordable",
      description: "Choose from various subscription plans that fit your budget with no hidden fees."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Features You'll Love</h2>
          <p className="section-subtitle">
            Onefit is designed to make your fitness journey simple, personalized, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md card-hover"
            >
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
