import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { addWishList, removeWishList } from "../redux/slices/wishlistSlice"
import { addCart } from "../redux/slices/cartSlice";


const ProductDetails = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [wishlistStatus, setWishlistStatus] = useState(false)
  const { id } = useParams();
  const { item } = useSelector((state) => state.product);
  const wishlist = useSelector((state) => state.wishlist.wishList)

  useEffect(() => {
    if (item.length > 0) {
      const foundProduct = item.find((product) => product.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id, item]);

  useEffect(() => {
    if (product) {
      const isExist = wishlist.some(item => item.id == product.id);
      setWishlistStatus(isExist);
    }
  }, [product])


  const manageWishlist = () => {
    if (wishlistStatus) {
      dispatch(removeWishList(product))
      setWishlistStatus(false);
    }
    else {
      dispatch(addWishList(product));
      setWishlistStatus(true)
    }
  }

  const handleCart = () => {
    dispatch(addCart(product));
  }

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  return (
    <div className="w-[70%] h-[80vh] mx-auto border-2 border-gray-400 rounded-lg mt-10 flex justify-center gap-5 p-5">
      <img src={product.image} className="w-[30vw]" alt={product.title} />
      <div className="">
        <h2 className="text-2xl font-bold mt-4 text-blue-500">{product.title}</h2>
        <p className="text-xl font-serif mt-4 text-justify">{product.description}</p>
        <div className="flex items-center justify-left gap-5 mt-7">
          <h1 className="text-xl font-bold">Rating: {product.rating.rate}</h1>
          <div onClick={manageWishlist} className="relative flex group flex-col items-center cursor-pointer">
            {wishlistStatus ? <FaHeart size={40} /> : <CiHeart size={40} />}
            <h2 className="p-3 text-nowrap absolute -bottom-14 text-lg text-white opacity-0 group-hover:opacity-100 font-semibold  duration-400 shadow-sm bg-gray-500 rounded-md leading-5 z-40 ">{wishlistStatus ? "Remove from wishlist" : "Add to wishlist"} </h2>
          </div>
        </div>
        <div className="flex items-center mt-5 justify-left gap-10">
          <h2 className="text-2xl font-semibold text-blue-500" ><span className="font-bold">Price:</span> ${product.price}</h2>
          <h2 className="text-2xl font-semibold text-blue-500"><span className="font-bold">Category:</span> {product.category}</h2>
        </div>
        <button onClick={handleCart} className="px-3 py-3 font-semibold text-xl bg-blue-500 text-white rounded-md cursor-pointer mt-10 hover:bg-gray-600 duration-400">Add to Cart</button>
      </div>
    </div>
  );

};

export default ProductDetails;
