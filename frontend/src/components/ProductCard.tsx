import type { ProductType } from "@/types/ProductType"

type ProductCardProps = {
  product: ProductType
}
const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard