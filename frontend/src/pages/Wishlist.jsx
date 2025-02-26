import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlistProduct = useSelector(state => state.wishlist.wishList)
  console.log(wishlistProduct);
  return (
    <div>
      <h2 className='text-2xl font-semibold text-blue-500 text-center mt-10'>My Wishlist</h2>
      <div className='mt-10'>
        <table className='w-[70%] mx-auto'>
          <thead className='text-lg border-b bg-gray-100'>
            <tr className=''>
              <th className='px-6 py-3 text-lg text-gray-700'>Image</th>
              <th className='px-6 py-3 text-lg text-gray-700'>Name</th>
              <th className='px-6 py-3 text-lg text-gray-700'>Price</th>
              <th className='px-6 py-3 text-lg text-gray-700'>Action</th>
            </tr>
          </thead>
          {wishlistProduct.map(item => {
            return <tbody className='text-lg border-b'>
              <tr className='text-center'>
                <td className='px-6 py-3 text-lg text-gray-700'><img src={item.image} className='w-10' alt="imgnoutfound" /></td>
                <td className='px-6 py-3 text-lg text-gray-700'>{item.title}</td>
                <td className='px-6 py-3 text-lg text-gray-700'>${item.price}</td>
                <td className='px-6 py-3 text-lg text-gray-700'>
                  <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer text-sm font-semibold'>Remove</button>
                </td>
              </tr>
            </tbody>
          })}
        </table>
      </div>
    </div>
  )
}

export default Wishlist