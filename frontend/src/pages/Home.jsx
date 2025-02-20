import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import ProductListing from "./ProductListing";
import { useDispatch } from "react-redux";
import { setError, setLoading, setProducts } from "../redux/slices/productSlice";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductListing />
    </div>
  );
};

export default Home;
