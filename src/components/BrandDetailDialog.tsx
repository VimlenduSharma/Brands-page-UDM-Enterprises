import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../components/ui/dialog.tsx";
import { Button } from "../components/ui/button.tsx";
import { X } from "lucide-react";

interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
  partnerYear?: string;
  fullDescription?: string;
}

interface BrandDetailDialogProps {
  brand: Brand | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BrandDetailDialog: React.FC<BrandDetailDialogProps> = ({ brand, open, onOpenChange }) => {
  if (!brand) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="relative">
          <DialogClose className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg mb-4">
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="h-32 object-contain"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {brand.name}
          </DialogTitle>
          <DialogDescription className="text-center text-blue-900 mb-4">
            {brand.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-gray-500 mb-1">Category</h4>
            <div className="inline-block py-1 px-3 bg-brand-purple text-white rounded-full text-sm">
              {brand.category}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-gray-500 mb-1">Description</h4>
            <p className="text-gray-700">
              {brand.fullDescription || "A proud partner in our network of trusted brands."}
            </p>
          </div>
          
          <div className="pt-4">
            <Button className="w-full bg-brand-purple hover:bg-brand-purple_light">
              Learn More About {brand.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrandDetailDialog;
