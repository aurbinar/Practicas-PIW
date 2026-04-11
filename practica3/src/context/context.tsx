"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/types";

interface SelectionContextType {
  selectedProducts: Product[];
  toggleSelection: (product: Product) => void;
  checkIsSelected: (id: number) => boolean;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const toggleSelection = (product: Product) => {
    setSelectedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const checkIsSelected = (id: number) => {
    return selectedProducts.some((p) => p.id === id);
  };

  return (
    <SelectionContext.Provider value={{ selectedProducts, toggleSelection, checkIsSelected }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection debe usarse dentro de un SelectionProvider");
  }
  return context;
};