import React from 'react';
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      <button
        onClick={() => onCategoryChange('all')}
        className={cn(
          "px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium",
          activeCategory === 'all'
            ? "bg-brand-purple text-white shadow-md"
            : "bg-white text-gray-700 hover:bg-gray-100"
        )}
      >
        All Brands
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category.toLowerCase())}
          className={cn(
            "px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium",
            activeCategory === category.toLowerCase()
              ? "bg-brand-purple text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
