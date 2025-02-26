import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  console.log(cartItems);


  return <div className="mt-10">
    <h2 className="font-bold text-2xl text-blue-500">Your Cart Items</h2>
    <table className="w-[80%] mt-10">
      <thead className="bg-gray-100" >
        <tr className="text-left">
          <th className="px-6 py-3 font-semibold text-lg text-gray-700 border-b">Image</th>
          <th className="px-6 py-3 font-semibold text-lg text-gray-700 border-b">Product Name</th>
          <th className="px-6 py-3 font-semibold text-lg text-gray-700 border-b">Quantity</th>
          <th className="px-6 py-3 font-semibold text-lg text-gray-700 border-b">Unit Price</th>
          <th className="px-6 py-3 font-semibold text-lg text-gray-700 border-b">Total Price</th>
          <th className="px-6 py-3 font-semibold text-lg text-gray-700 border-b text-center">Action</th>
        </tr>
      </thead>
      {cartItems.length > 0 ? cartItems.map(item => {
        return <tbody className="border-b">
          <tr className="text-left">
            <td className="px-6 py-3 font-semibold text-sm text-gray-700 border-b"><img className="w-15 h-15" src={item.image} alt="" /> </td>
            <td className="px-6 py-3 font-semibold text-sm text-gray-700 ">{item.title}</td>
            <td className="px-6 py-3 font-semibold text-sm text-gray-700 text-center ">{item.quantity}</td>
            <td className="px-6 py-3 font-semibold text-sm text-gray-700 text-center ">${item.price}</td>
            <td className="px-6 py-3 font-semibold text-sm text-gray-700 text-center ">${(item.quantity * item.price).toFixed(2)}</td>
            <td className="px-6 py-3 font-semibold text-sm text-gray-700 flex justify-center gap-2">
              <button className="px-3 py-2 font-semibold text-white bg-green-500 rounded-md cursor-pointer">Update</button>
              <button className="px-3 py-2 font-semibold text-white bg-red-500 rounded-md cursor-pointer">Delete</button>
            </td>
          </tr>
        </tbody>
      }) : (
        <tr className="text-center">
          <h2 className="font-semibold text-blue-500">No Items found</h2>
        </tr>
      )}
    </table>
    <div className="w-[80%] shadow-xl p-5 rounded-lg bg-gray-100 text-blue-500 text-xl font-semibold text-right mt-15">
      <p className="">Grand Total: ${totalPrice.toFixed(2)}</p>
      <button className="p-3 bg-blue-500 text-white mt-5 rounded-md cursor-pointer">Order Now</button>
    </div>
  </div>;
};

export default Cart;
