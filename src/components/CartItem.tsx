import useCart from "../hooks/useCart";
import currencyFormatter from "../utilities/currencyFormatter";
import setImgURL from "../utilities/setImgURL";
import { ProductItem } from "../ts/types";
import { memo } from "react";

interface CartItemProps extends ProductItem {
  quantity?: number;
}

function CartItem({ ...item }: CartItemProps) {
  const { dispatch } = useCart();

  const handleRemoveItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id: item.id },
    });
  };

  return (
    <div className="grid items-center w-full grid-cols-2 gap-10 py-6 overflow-hidden text-sm justify-items-center sm:text-base">
      <div className="flex items-center gap-6 justify-self-start">
        <img
          className="object-contain w-20 h-20 border"
          src={setImgURL(item.id)}
          alt="item.name"
        />
        <h5 className="capitalize">{item.name}</h5>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>{item.quantity}</div>
        <div>{currencyFormatter(item.price * (item.quantity ?? 1))}</div>
        <button onClick={handleRemoveItem} className="justify-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="red"
          >
            <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const MemoCartItem = memo(CartItem);
export default MemoCartItem;
