import { Dispatch, SetStateAction } from "react";

export interface ProductItem {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends ProductItem {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

export interface CartProviderProps {
  children: React.ReactNode;
}

export interface AddItemAction {
  type: "ADD_ITEM";
  payload: ProductItem;
}

export interface RemoveItemAction {
  type: "REMOVE_ITEM";
  payload: { id: number };
}

export interface InitializeCartAction {
  type: "INITIALIZE_CART";
  payload: CartItem[];
}

export interface ClearCartAction {
  type: "CLEAR_ITEMS";
}

export type CartAction =
  | AddItemAction
  | RemoveItemAction
  | InitializeCartAction
  | ClearCartAction;

export interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
  processed: boolean;
  setProcessed: Dispatch<SetStateAction<boolean>>;
}
