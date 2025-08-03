export type ProductInputType = {
  name: string;
  price: string;
  image: string;
};

export type ProductType = ProductInputType & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductStore = {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  createProduct: (
    newProduct: ProductInputType
  ) => Promise<{ success: boolean; message: string }>;
  fetchProducts: () => void;
  deleteProduct: (
    pid: string
  ) => Promise<{ success: boolean; message: string }>;
};
