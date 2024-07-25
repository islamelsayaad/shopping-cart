import { CartAction, CartState } from "../lib/types";

export const INIT_CART: CartState = { cart: [] };

export const loadStateFromLocalStorage = (): CartState => {
  const savedState = localStorage.getItem("cartState");
  return savedState ? JSON.parse(savedState) : INIT_CART;
};

// Helper function to save state to local storage
const saveStateToLocalStorage = (state: CartState) => {
  localStorage.setItem("cartState", JSON.stringify(state));
};

export const reducer = (state: CartState, action: CartAction) => {
  let newState: CartState;

  switch (action.type) {
    case "ADD_ITEM": {
      const isExist = state.cart.find((item) => item.id === action.payload?.id);

      if (isExist) {
        newState = {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload?.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      } else {
        newState = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
      break;
    }
    case "REMOVE_ITEM": {
      newState = {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      break;
    }

    case "INC_ITEM": {
      newState = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      break;
    }

    case "DEC_ITEM": {
      newState = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        ),
      };
      break;
    }

    case "CLEAR_ITEMS": {
      newState = {
        ...state,
        cart: [],
      };
      break;
    }

    default:
      throw new Error("No action type provided");
  }

  // Save the new state to local storage
  saveStateToLocalStorage(newState);

  return newState;
};
