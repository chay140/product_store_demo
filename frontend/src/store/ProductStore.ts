import type { ProductStore, ProductType } from "@/types/ProductType";
import { create } from "zustand";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct: ProductType) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    console.log("res", data);

    // res 검증
    if (data.success) {
      set((prev_state) => ({ products: [...prev_state.products, data.data] }));
      return { success: true, message: "Product created successfully." };
    } else {
      return data;
    }
  },
}));
