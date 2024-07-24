import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import currencyFormatter from "../utilities/currencyFormatter";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { state, dispatch, setProcessed } = useCart();
  const navigate = useNavigate();

  const totalPrice = state.cart.reduce(
    (qty, item) => item.quantity * item.price + qty,
    0
  );

  const handleProcessed = () => {
    if (state.cart.length > 0) {
      const checkMin = state.cart.reduce(
        (min, item) => (item.price < min ? item.price : min),
        state.cart[0].price
      );
      if (totalPrice >= checkMin) {
        navigate("/processed");
        dispatch({ type: "CLEAR_ITEMS" });
        setProcessed(true);
      } else {
        setProcessed(false);
      }
    }
  };

  return (
    <div className="text-sm my-14 md:text-base">
      <div className="w-full mb-10">
        <ul className="w-full text-[#969696]">
          <h5>Products</h5>
        </ul>
      </div>
      <div className="flex flex-col w-full h-full divide-y">
        {state.cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-end w-full gap-4 my-8">
        <button
          onClick={handleProcessed}
          className="px-8 py-3 font-normal text-white bg-black rounded-full sm:text-md"
        >
          Processed now
        </button>
        <h5 className="font-normal">total: {currencyFormatter(totalPrice)}</h5>
      </div>
    </div>
  );
}

export default Cart;
