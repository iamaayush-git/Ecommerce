import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { userName, email } = useSelector(state => state.loggedInUser);

  const updateHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className='text-center' action="">
      <h2 className='mt-10 font-semibold text-2xl text-blue-500'>Update Your Details</h2>
      <div className='shadow-xl border border-gray-200 bg-gray-50 p-10 rounded-xl flex flex-col gap-5 mt-10 w-[30vw] mx-auto'>
        <div className='w-full flex justify-center gap-2 items-center'>
          <label htmlFor="name">Name:</label>
          <input className='w-full border rounded-sm outline-none px-2 py-2' defaultValue={userName} type="text" id="name" />
        </div>
        <div className='w-full flex justify-center gap-2 items-center'>
          <label htmlFor="email">Email:</label>
          <input className='w-full border rounded-sm outline-none px-2 py-2' type="email" defaultValue={email} id="email" />
        </div>
        <button onClick={updateHandler} className='bg-blue-500 text-white px-3 py-2 rounded-md cursor-pointer text-center mx-auto font-semibold ' type='submit'>Update</button>
      </div>
    </form>
  )
}

export default Profile