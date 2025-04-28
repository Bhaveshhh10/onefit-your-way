
import { useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Onefit made fitness affordable and fun. Lost 10 kg in 4 months!",
      name: "Riya",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    },
    {
      quote: "My trainer feels like a friend. It's not just workouts; it's a lifestyle now.",
      name: "Aryan",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      quote: "As a busy professional, the flexibility of online sessions has been a game-changer.",
      name: "Priya",
      location: "Bengaluru",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Hear from real people who have transformed their fitness journey with Onefit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="relative overflow-hidden h-96">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-md">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xl italic mb-4 text-gray-700">"{testimonial.quote}"</p>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex ? 'bg-onefit-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
