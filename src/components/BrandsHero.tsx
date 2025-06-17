import React from "react";
import BrandCard from "./BrandCard";
import { brandsWithLogos as brands } from "../lib/brands";  // update path if your data file lives elsewhere

/**
 * Hero + grid of perfectly‑aligned BrandCard components.
 */
const BrandsHero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-purple to-brand-800 text-white overflow-hidden">
      {/* Copy deck */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="inline-block bg-white text-brand-purple px-4 py-2 rounded-lg mr-2 transform -rotate-1">
              B
            </span>
            rands
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover our carefully selected network of trusted brand partners that
            bring quality products and services to our customers.
          </p>
        </div>

        {/* Card grid */}
        <div
          className="grid gap-8 justify-items-center
                     grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]"
        >
          {brands.map((b) => (
            <BrandCard
              key={b.name}
              logo={b.logo}
              name={b.name}
              category={b.category}
              since={b.since}
              description={b.description}
            />
          ))}
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full bg-white right-0 top-0 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-48 h-48 rounded-full bg-white left-1/4 bottom-0 translate-y-1/2" />
      </div>
    </section>
  );
};

export default BrandsHero;
