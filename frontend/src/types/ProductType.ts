export type ProductType = {
  name: string;
  price: string;
  image: string;
};

export type ProductStore = {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  createProduct: (
    newProduct: ProductType
  ) => Promise<{ success: boolean; message: string }>;
};
