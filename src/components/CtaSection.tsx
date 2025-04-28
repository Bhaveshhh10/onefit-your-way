
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-onefit-blue text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Charge of Your Health with Onefit
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Download the app now and meet your perfect trainer today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-onefit-blue hover:bg-gray-100 font-semibold py-6 px-8 text-lg">
              Download Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-600 font-semibold py-6 px-8 text-lg">
              Book Free Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
