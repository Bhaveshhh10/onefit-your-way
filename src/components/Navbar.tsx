
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-onefit-blue">
            <span className="text-onefit-green">One</span>fit
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-onefit-blue transition-colors">
            Home
          </Link>
          <Link to="/trainers" className="text-gray-700 hover:text-onefit-blue transition-colors">
            Find Trainers
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-onefit-blue transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-onefit-blue transition-colors">
            About Us
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="font-semibold"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button 
            className="bg-onefit-blue hover:bg-blue-600 font-semibold"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-onefit-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/trainers" 
              className="text-gray-700 hover:text-onefit-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Trainers
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-onefit-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-onefit-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/login");
                }}
              >
                Log In
              </Button>
              <Button 
                className="bg-onefit-blue hover:bg-blue-600 w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
