import useCart from "../hooks/useCart";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { ProductItem } from "../lib/types";
import { memo } from "react";
import { iconSizeChange } from "../utilities/iconSizeChange";

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
  const handleIncreaseItem = () => {
    dispatch({
      type: "INC_ITEM",
      payload: { id: item.id },
    });
  };
  const handleDecreaseItem = () => {
    dispatch({
      type: "DEC_ITEM",
      payload: { id: item.id },
    });
  };

  return (
    <div className="flex items-center justify-between w-full py-5 overflow-hidden">
      <div className="flex items-center gap-6">
        <img
          className="object-contain w-20 h-20 border"
          src={`/imgs/${item.id}.jpg`}
          alt="item.name"
          loading="lazy"
        />
        <span className="hidden w-full capitalize sm:inline-block max-w-24 md:max-w-64">
          {item.name}
        </span>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button className="text-xl" onClick={handleDecreaseItem}>
          -
        </button>
        {item.quantity}
        <button className="text-xl" onClick={handleIncreaseItem}>
          +
        </button>
      </div>
      <div>{currencyFormatter(item.price * (item.quantity ?? 1))}</div>
      <button onClick={handleRemoveItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={iconSizeChange(22, 28)}
          viewBox="0 -960 960 960"
          width={iconSizeChange(22, 28)}
          fill="#000000"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
    </div>
  );
}

export default memo(CartItem);
