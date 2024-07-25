import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { memo } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Cart() {
  const { state, totalPrice, cartItemsNum, dispatch } = useCart();

  const { isAuthenticated, user } = useAuth0();

  const handleProcessed = () => {
    if (state.cart.length > 0 && isAuthenticated) {
      alert(
        `Processed successfully\nBeeeeep..\nCar is coming to ${
          user?.name || "you"
        } 🚗 `
      );
      dispatch({ type: "CLEAR_ITEMS" });
    }
    if (state.cart.length === 0) alert("Cart is empty");
    if (!isAuthenticated) alert("Please login first");
  };

  return (
    <div className="my-14">
      <div className="w-full mb-8">
        <h3 className="mb-10 text-2xl font-medium sm:text-4xl">Your Cart</h3>
      </div>
      {cartItemsNum === 0 ? (
        <div className="w-full h-full mt-24 text-xl text-gray-400 mb-36">
          Your cart is empty 🌵
        </div>
      ) : (
        <div className="flex flex-col w-full h-full divide-y mb-14">
          {state.cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-end w-full my-8">
        <div className="flex items-center justify-between w-full sm:justify-center sm:gap-32 sm:w-fit">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <span className="">Total:</span>
            <span className="text-lg font-medium sm:text-2xl">
              {currencyFormatter(totalPrice)}
            </span>
          </div>
          <button
            onClick={handleProcessed}
            className="px-6 py-3 font-normal text-white bg-black rounded-full sm:text-md"
          >
            Processed now
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Cart);
