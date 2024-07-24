import { createContext, useEffect, useReducer, useState } from "react";
import {
  CartAction,
  CartContextType,
  CartProviderProps,
  CartState,
} from "../ts/types";

const initialState: CartState = { cart: [] };

const initializer = (initialValue = initialState) => {
  const localCart = localStorage.getItem("localCart");
  if (localCart) {
    try {
      return JSON.parse(localCart) || initialValue;
    } catch (error) {
      console.error("Failed to parse localCart from localStorage:", error);
      localStorage.removeItem("localCart"); // Clear invalid data
    }
  }
  return initialValue;
};

const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const isExist = state.cart.find((item) => item.id === action.payload?.id);

      if (isExist) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload?.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    case "CLEAR_ITEMS": {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      throw new Error("No action type provided");
  }
};

export const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => null,
  processed: false,
  setProcessed: () => null,
});

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);
  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch, processed, setProcessed }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
