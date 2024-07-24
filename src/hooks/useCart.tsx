import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function useCart() {
  return useContext(CartContext);
}

export default useCart;
