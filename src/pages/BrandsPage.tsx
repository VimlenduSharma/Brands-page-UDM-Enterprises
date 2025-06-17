import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.tsx";
import BrandCard from "../components/BrandCard.tsx";
import CategoryFilter from "../components/CategorFilter.tsx";
import Newsletter from "../components/Newsletter.tsx";
import BrandDetailDialog from "../components/BrandDetailDialog.tsx";
import { motion } from "framer-motion";
import { getLogo } from "../lib/brandLogos";

const rawBrands = [
  {
    id: 1,
    name: "SWISS BEAUTY",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "Swiss Beauty offers high-quality makeup and skincare products that are affordable and accessible to all.",
  },
  {
    id: 2,
    name: "DOT & KEY",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "Dot & Key creates skincare solutions that are simple, effective, and targeted to specific skin concerns.",
  },
  {
    id: 3,
    name: "THE MAN COMPANY",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "The Man Company provides premium grooming essentials for men who appreciate quality and style.",
  },
  {
    id: 4,
    name: "NEEMAN'S",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "Neeman's creates sustainable, comfortable footwear that's good for you and the planet.",
  },
  {
    id: 5,
    name: "La' FRENCH",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "La' French brings the elegance and sophistication of French skincare to your daily routine.",
  },
  {
    id: 6,
    name: "SIRONA",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "Sirona offers innovative feminine hygiene products designed to make women's lives easier and more comfortable.",
  },
  {
    id: 7,
    name: "NOVA NOVA",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "Nova Nova creates cutting-edge tech products that simplify everyday life with innovative solutions.",
  },
  {
    id: 8,
    name: "NU REPUBLIC",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "NU Republic delivers premium audio products that provide an exceptional sound experience at an affordable price.",
  },
  {
    id: 9,
    name: "BIG MUSCLES",
    description: "Partner since 2023",
    category: "Fitness",
    partnerYear: "2023",
    fullDescription:
      "Big Muscles Nutrition offers scientifically formulated supplements to help you achieve your fitness goals.",
  },
  {
    id: 10,
    name: "GUSH",
    description: "Partner since 2023",
    category: "Beauty",
    partnerYear: "2023",
    fullDescription:
      "Gush creates home and lifestyle products that bring comfort and joy to your everyday spaces.",
  },
  {
    id: 11,
    name: "MOUNTAINOR",
    description: "Partner since 2023",
    category: "Outdoor",
    partnerYear: "2023",
    fullDescription:
      "Mountainor provides high-quality gear for outdoor enthusiasts who demand performance and durability.",
  },
] as const;

/* Enrich the list with logo paths resolved from src/assets/brands */
export const brandsData = rawBrands.map((b) => ({
  ...b,
  logo: getLogo(b.name) ?? "/placeholder.svg",
}));

type Brand = (typeof brandsData)[number];

/* ------------------------------------------------------------------
   BrandsPage component
 ------------------------------------------------------------------*/
const BrandsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredBrands, setFilteredBrands] = useState(brandsData);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // build category chips from data
  const categories = Array.from(new Set(brandsData.map((b) => b.category)));

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredBrands(brandsData);
    } else {
      setFilteredBrands(
        brandsData.filter(
          (b) => b.category.toLowerCase() === activeCategory.toLowerCase()
        )
      );
    }
  }, [activeCategory]);

  const handleBrandClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setDialogOpen(true);
  };

  /* ---------------- framer-motion presets ---------------- */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="mb-12 text-center">
              <p className="text-brand-purple font-medium mb-3">Our Partners</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover Our Brand Network
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've partnered with leading brands across various industries to
                bring you the best products and services.
              </p>
            </div>

            {/* Category chips */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Card grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
              key={activeCategory}
            >
              {filteredBrands.map((brand) => (
                <motion.div key={brand.id} variants={item}>
                  <BrandCard
                    name={brand.name}
                    logo={brand.logo}
                    description={brand.description}
                    category={brand.category}
                    onClick={() => handleBrandClick(brand)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {filteredBrands.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600">
                  No brands found in this category
                </h3>
              </div>
            )}
          </div>
        </section>

        <Newsletter />
      </main>

      <BrandDetailDialog
        brand={selectedBrand}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

export default BrandsPage;
