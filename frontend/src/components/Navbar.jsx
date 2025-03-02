import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/slices/userSlice";
import { handleSuccess } from "../utils/toastify";

const Navbar = () => {
  const dispatch = useDispatch()
  const { totalQuantity } = useSelector(state => state.cart);
  const { userName, loginStatus } = useSelector(state => state.loggedInUser)

  const handleLogout = () => {
    dispatch(setLogout())
    handleSuccess("Logout successful");
  }

  return (
    <div className="flex items-center justify-center pt-5 ">
      <Link to={"/"} className="cursor-pointer">
        {" "}
        <p className="bg-red-400 font-bold p-3 rounded-full">
          <span className="text-white">HELLO</span>
          <span className="text-black"> ECOMMERCE</span>
        </p>
      </Link>
      <ul className="flex flex-1 items-center justify-center gap-10 font-medium">
        <Link to={"/"}>
          <li className="text-slate-600 cursor-pointer text-xl font-semibold">Home</li>
        </Link>
        <Link to={"/shop"}>
          <li className="text-slate-600 cursor-pointer text-xl font-semibold">Shop</li>
        </Link>
        {loginStatus === "true" && < Link to={"/wishlist"}>
          <li className="text-slate-600 cursor-pointer text-xl font-semibold">Wishlist</li>
        </Link>
        }
        {loginStatus === "true" &&
          <Link to={"/cart"}>
            <li className="relative">
              <IoCartOutline size={30} />
              <p className="absolute -bottom-1 -right-2 h-4 w-4 text-sm bg-red-500 text-white rounded-full text-center leading-4">{totalQuantity}</p>
            </li>
          </Link>
        }


      </ul>
      {
        loginStatus === "false" ? <div className="flex gap-5">
          <Link to={"/auth/login"}>
            <button className="bg-black text-white px-3 py-2 rounded-md font-medium cursor-pointer">
              Login
            </button>
          </Link>
          <Link to={"/auth/signup"}>
            <button className="bg-slate-200 px-3 py-2 rounded-md font-medium cursor-pointer">
              SignUp
            </button>
          </Link>
        </div> : (<button onClick={handleLogout} className="bg-black text-white px-3 py-2 rounded-md font-medium cursor-pointer"> Logout </button>)
      }
      {userName && <h2 className="ml-5 text-lg font-semibold">Namaste, {userName}</h2>}
    </div >
  );
};

export default Navbar;
