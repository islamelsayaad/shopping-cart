import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useEffect } from "react";

function Processed() {
  const { processed } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (processed) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [processed, navigate]);

  return (
    <div className="my-20 text-2xl c_processed_message">
      {processed ? "Your order has been processed ✅ ..." : ""}
    </div>
  );
}

export default Processed;
