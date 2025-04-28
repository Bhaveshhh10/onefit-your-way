
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-6 text-onefit-blue">404</h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-onefit-blue hover:bg-blue-600">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
