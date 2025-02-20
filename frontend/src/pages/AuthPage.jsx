import React from "react";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex justify-between mt-10 gap-5 bg-gray-300 rounded-2xl">
      <div className="rounded-lg h-[100vh] w-[50vw] pt-10 flex items-center justify-center">
        <div>
          <h3 className="text-black text-center text-2xl font-semibold">
            Welcome to myEcommerce
          </h3>
          <p className="text-black text-center">
            Please login or signup to continue.
          </p>
        </div>
      </div>
      <div className="w-[100%]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
