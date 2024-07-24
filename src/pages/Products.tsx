import products from "../data/products.json";
import ProductItem from "../components/ProductItem";
import { memo } from "react";

function Products() {
  return (
    <div className="grid w-full gap-6 justify-items-center c_products_layout my-14">
      {products.map((item: { id: number; name: string; price: number }) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}

const MemoProducts = memo(Products);
export default MemoProducts;
