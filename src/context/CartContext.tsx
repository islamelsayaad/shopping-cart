import { createContext, useReducer, useState } from "react";
import { CartContextType, CartProviderProps, CartState } from "../lib/types";
import { loadStateFromLocalStorage, reducer } from "../utilities/cartReducer";

const INIT_CART: CartState = { cart: [] };

export const CartContext = createContext<CartContextType>({
  state: INIT_CART,
  dispatch: () => null,
  processed: false,
  setProcessed: () => null,
  cartItemsNum: 0,
  totalPrice: 0,
});

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(
    reducer,
    INIT_CART,
    loadStateFromLocalStorage
  );
  const cartItemsNum = state.cart.length;
  const totalPrice = state.cart.reduce(
    (qty, item) => item.quantity * item.price + qty,
    0
  );

  const [processed, setProcessed] = useState(false);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        processed,
        setProcessed,
        cartItemsNum,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
