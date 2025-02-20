import React from "react";
import { Link } from "react-router-dom";
const ItemCard = ({ product }) => {


  return <div className="relative mx-auto group h-[55vh] w-[23vw] border-2 border-gray-300 p-5 rounded-lg shadow-xl">
    <div className="mx-auto w-[90%] h-[50%] group-hover:scale-105 duration-300">
      <img src={product.image} alt={product.title} className="mx-auto w-full h-full" />
    </div>
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="font-semibold text-xl">$ {product.price}</h2>
      <h2 className="font-semibold text-xl">{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title} </h2>
    </div>
    <Link to={`/product-details/${product.id}`} ><button className="absolute bottom-5  mt-5 px-3 py-3 cursor-pointer bg-blue-500 text-white rounded-md font-semibold text-xl">View Details</button></Link>
  </div>;
};

export default ItemCard;
