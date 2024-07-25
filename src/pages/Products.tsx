import products from "../data/products.json";
import ProductItem from "../components/ProductItem";
import { memo } from "react";

function Products() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 text-sm sm:gap-6 c_products_container my-14 sm:text-base">
      {products.map((item: { id: number; name: string; price: number }) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default memo(Products);
