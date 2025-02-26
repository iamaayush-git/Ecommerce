import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ItemCard from '../components/ItemCard';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const categories = ["men", "women", "electronics", "jewelery"];
  const allProducts = useSelector(state => state.product.item);
  console.log(allProducts);

  const categoryMapping = {
    men: "men's clothing",
    women: "women's clothing",
    electronics: "electronics",
    jewelery: "jewelery",
  };
  useEffect(() => {
    setFilterProduct(allProducts);
  }, [])

  useEffect(() => {
    if (selectedCategory.length > 0) {
      setFilterProduct(
        allProducts.filter((product) =>
          selectedCategory.some((selected) => categoryMapping[selected] === product.category)
        ))
    }
    else {
      setFilterProduct(allProducts)
    }
  }, [selectedCategory, allProducts])

  function handleCategory(category) {
    setSelectedCategory(prev => prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category])
  }

  return (
    <div className='mt-10 '>
      <h2 className='text-xl font-semibold text-blue-500'>Please Select categories that you want.</h2>
      <div className='flex  justify-center gap-10 mt-10'>
        <div className='flex flex-col gap-2 '>
          {categories.map((category) => {
            return <label key={category} htmlFor={category} className='cursor-pointer'>
              <input onChange={() => handleCategory(category)} type="checkbox" checked={selectedCategory.includes(category)} id={category} />
              {""} {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          })}
        </div>
        <div className='grid grid-cols-3 gap-5 flex-1'>
          {filterProduct.length > 0 ? filterProduct.map(data => {
            const product = {
              image: data.image,
              price: data.price,
              description: data.description,
              rate: data.rating.rate,
              title: data.title,
              category: data.category,
              id: data.id
            }
            return <ItemCard product={product} key={data.id} />
          }) : <h2 className='text-2xl text-center text-red-500 font-semibold'>No product found!</h2>}
        </div>
      </div>
    </div>
  )
}

export default Shop