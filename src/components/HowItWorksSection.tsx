
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Search",
      description: "Find trainers based on your specific needs, location, and fitness goals."
    },
    {
      number: "02",
      title: "Subscribe",
      description: "Choose a plan that fits your budget and commitment level."
    },
    {
      number: "03",
      title: "Start Training",
      description: "Begin your personalized fitness journey online or in person, at your own pace."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started with Onefit is easy. Just follow these simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="bg-onefit-blue text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
