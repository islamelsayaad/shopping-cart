import { currencyFormatter } from "../utilities/currencyFormatter";
import useCart from "../hooks/useCart";

function ProductItem({ ...item }: { id: number; name: string; price: number }) {
  const { dispatch } = useCart();

  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="flex flex-col items-center w-full h-full gap-6 px-4 py-4 overflow-hidden border-2 border-gray-100 sm:gap-8 sm:px-6 sm:pt-4 sm:pb-6 rounded-xl">
      <div className="flex items-center justify-center">
        <img
          src={`/imgs/${item.id}.jpg`}
          alt={item.name}
          className="object-cover w-full h-auto"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col h-full gap-2 sm:gap-4">
        <h5 className="h-full font-light capitalize sm:text-md line-clamp-3">
          {item.name}
        </h5>
        <h5 className="text-md sm:text-lg">{currencyFormatter(item.price)}</h5>
        <button
          onClick={handleAddItem}
          className="w-full px-1 py-2 mt-2 font-normal transition-all bg-transparent border border-black rounded-full sm:p-[0.6rem] sm:text-md hover:bg-black hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
