import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="px-5 py-4 sm:px-12">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
