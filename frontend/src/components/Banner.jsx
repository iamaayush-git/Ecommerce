import React from "react";
import banner from "../../src/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-10">
      <h2 className="text-5xl text-center text-blue-500 font-bold">
        Welcome to my Ecommerce Website.
      </h2>
      <p className="text-3xl text-center mt-3 text-blue-500 font-semibold">
        Best deals on top-quality products
      </p>
      <img src={banner} alt="bannerimg" className="mt-5 w-full h-[60vh] " />
    </div>
  );
};

export default Banner;
