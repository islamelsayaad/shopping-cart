// import products from "../data/products.json";
import ProductItem from "../components/ProductItem";
import { memo } from "react";

// const jsonString = JSON.stringify(products);
// const jsonData = JSON.parse(jsonString);

const products = [
  {
    id: 1,
    name: "Marketside Turtle French Style Cheesecake Mousse",
    price: 4.29,
  },
  {
    id: 2,
    name: "Freshness Guaranteed Cherry Pie",
    price: 10.79,
  },
  {
    id: 3,
    name: "Freshness Guaranteed Strawberry Swirl Cheesecake",
    price: 12.49,
  },
  {
    id: 4,
    name: "Freshness Guaranteed Seasonal Fruit Blend",
    price: 8.99,
  },
  {
    id: 5,
    name: "Freshness Guaranteed Cut Watermelon",
    price: 7.29,
  },
];

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
