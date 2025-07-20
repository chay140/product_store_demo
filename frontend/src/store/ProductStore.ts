import type { ProductStore, ProductType } from "@/types/ProductType";
import { create } from "zustand";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct: ProductType) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return {success: false, message: "Please fill in all fields."}
    }
    // const res = await fetch
  }
}));
