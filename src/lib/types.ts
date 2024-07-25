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

export interface ClearCartAction {
  type: "CLEAR_ITEMS";
}

export interface IncreaseItemAction {
  type: "INC_ITEM";
  payload: { id: number };
}

export interface DecreaseItemAction {
  type: "DEC_ITEM";
  payload: { id: number };
}

export type CartAction =
  | AddItemAction
  | RemoveItemAction
  | ClearCartAction
  | IncreaseItemAction
  | DecreaseItemAction;

export interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
  processed: boolean;
  setProcessed: Dispatch<SetStateAction<boolean>>;
  cartItemsNum: number;
  totalPrice: number;
}
