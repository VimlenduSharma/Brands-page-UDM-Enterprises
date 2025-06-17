import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button.tsx";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white shadow-md py-3" : "bg-brand-purple py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <h1 className={cn(
                "text-xl font-bold transition-colors",
                isScrolled ? "text-brand-purple" : "text-white"
              )}>
                UDM LOGO
              </h1>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={cn(
              "font-medium transition-colors hover:text-brand-400",
              isScrolled ? "text-gray-700" : "text-white"
            )}>
              Home
            </a>
            <a href="/about" className={cn(
              "font-medium transition-colors hover:text-brand-400",
              isScrolled ? "text-gray-700" : "text-white"
            )}>
              About Us
            </a>
            <a href="/brands" className={cn(
              "font-medium animated-underline",
              isScrolled ? "text-brand-purple" : "text-white font-bold"
            )}>
              Brands
            </a>
            <a href="/campaigns" className={cn(
              "font-medium transition-colors hover:text-brand-400",
              isScrolled ? "text-gray-700" : "text-white"
            )}>
              Ongoing Campaigns
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" className={cn(
              "bg-white text-brand-purple hover:bg-gray-100 border border-brand-purple",
              isScrolled ? "shadow-sm" : ""
            )}>
              Login
            </Button>
            <Button className={cn(
              "transition-colors",
              isScrolled 
                ? "bg-brand-purple text-white hover:bg-brand-purple_light" 
                : "bg-white text-brand-purple hover:bg-gray-100"
            )}>
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? "text-gray-700" : "text-white"}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Home
              </a>
              <a href="/about" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                About Us
              </a>
              <a href="/brands" className="px-3 py-2 text-brand-purple font-medium rounded-md bg-gray-100">
                Brands
              </a>
              <a href="/campaigns" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Ongoing Campaigns
              </a>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="secondary" className="w-full bg-white text-brand-purple border border-brand-purple justify-center">
                  Login
                </Button>
                <Button className="w-full bg-brand-purple text-white justify-center">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
