import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import Processed from "./pages/Processed";

function App() {
  return (
    <CartProvider>
      <div className="py-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/processed" element={<Processed />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
