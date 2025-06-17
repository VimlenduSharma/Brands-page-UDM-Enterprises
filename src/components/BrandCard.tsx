import React from "react";
import { Plus } from "lucide-react"; // lightweight icon, already available in the template

export interface BrandCardProps {
  /** Omit these when `placeholder` is true */
  logo?: string;
  name?: string;
  category?: string;
  since?: string;
  description?: string;
  /** Card click handler (ignored for placeholder) */
  onClick?: () => void;
  /** Render the dashed "More…" card */
  placeholder?: boolean;
}

const BrandCard: React.FC<BrandCardProps> = ({
  logo,
  name,
  category,
  since = "2023",
  description,
  onClick,
  placeholder = false,
}) => {
  /* --------------------------------------------------------------
     Placeholder variant
   --------------------------------------------------------------*/
  if (placeholder) {
    return (
      <article
        className="flex flex-col items-center justify-center w-64 sm:w-60 lg:w-56 h-80 rounded-xl border-2 border-dashed border-gray-300 text-gray-400 hover:bg-gray-50 transition"
      >
        <Plus size={48} className="mb-4" />
        <p className="text-center font-semibold leading-tight">
          More brands <br /> coming soon
        </p>
      </article>
    );
  }

  /* --------------------------------------------------------------
     Standard brand card
   --------------------------------------------------------------*/
  return (
    <article
      onClick={onClick}
      className="flex flex-col items-center justify-between w-64 sm:w-60 lg:w-56 h-80 p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
    >
      {/* Logo zone – fills the vertical slack while keeping aspect ratio */}
      <div className="w-full flex-grow flex items-center justify-center">
        {logo && (
          <img
            src={logo}
            alt={`${name ?? "Brand"} logo`}
            className="max-h-20 object-contain"
            loading="lazy"
          />
        )}
      </div>

      {/* Text zone */}
      <div className="pt-4 text-center space-y-1 w-full">
        {name && <h3 className="text-lg font-bold text-gray-900">{name}</h3>}

        {description && (
          <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        )}

        {since && (
          <p className="text-xs text-gray-400">Partner since {since}</p>
        )}

        {category && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple text-white">
            Category: {category}
          </span>
        )}
      </div>
    </article>
  );
};

export default BrandCard;
