import React from 'react';
import { Button } from "../components/ui/button.tsx";

const CollaborateSection = () => {
  return (
    <section className="py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4">
            <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0Z" 
                fill="none" 
                stroke="#dee2e6" 
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Are You a <span className="text-brand-purple">Brand ?</span>
            </h2>

            <Button 
              className="bg-brand-purple hover:bg-brand-purple_light text-white px-8 py-6 text-lg font-medium rounded-full"
            >
              Collaborate With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <div className="w-24 h-24 bg-brand-200 rounded-full opacity-60"></div>
      </div>
      
      <div className="hidden md:block absolute top-0 right-10 -translate-y-1/2">
        <div className="w-16 h-16 bg-brand-100 rounded-full"></div>
      </div>
    </section>
  );
};

export default CollaborateSection;
