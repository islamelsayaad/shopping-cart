import currencyFormatter from "../utilities/currencyFormatter";
import useCart from "../hooks/useCart";
import setImgURL from "../utilities/setImgURL";

function ProductItem({ ...item }: { id: number; name: string; price: number }) {
  const { dispatch } = useCart();

  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="grid items-center grid-rows-2 gap-4 border-2 border-gray-100 rounded-xl max-h-[580px] overflow-hidden max-w-[320px]">
      <div className="flex items-center justify-center px-4 py-8">
        <img
          src={setImgURL(item.id)}
          alt={item.name}
          className="object-cover h-[255px] w-[255px]"
        />
      </div>
      <div className="flex flex-col h-full px-6 py-4 justify-evenly">
        <h5 className="font-light capitalize text-md sm:text-lg line-clamp-2">
          {item.name}
        </h5>
        <h5 className="text-xl">{currencyFormatter(item.price)}</h5>
        <button
          onClick={handleAddItem}
          className="w-full p-[10px] text-md sm:text-lg font-normal transition-all bg-transparent border border-black rounded-full hover:bg-black hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
