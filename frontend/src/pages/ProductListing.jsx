import React, { useEffect } from 'react'
import { setLoading, setProducts } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ItemCard from '../components/ItemCard';


const ProductListing = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector(state => state.product);

  const fetchProducts = async () => {
    dispatch(setLoading())
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      dispatch(setProducts(response.data));
    } catch (error) {
      setError("could not fetch data");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [dispatch])


  return (
    <div className='mt-10'>
      <h2 className='text-5xl font-semibold text-blue-500'>Top Products</h2>
      {loading && <p className='text-green-500 font-bold text-3xl'>please wait....</p>}
      {error && <p className='text-red-500'>{error}</p>}
      <div className='grid grid-cols-3 gap-4 mt-10'>
        {
          item.map((data) => {
            const product = {
              image: data.image,
              price: data.price,
              description: data.description,
              rate: data.rating.rate,
              title: data.title,
              category: data.category,
              id: data.id
            }
            return data.rating.rate > 4 && <ItemCard key={product.title} product={product} />
          })}
      </div>

    </div>
  )
}

export default ProductListing