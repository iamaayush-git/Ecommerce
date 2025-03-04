import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "../src/pages/Home";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import { Bounce, ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="w-[90%] mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
