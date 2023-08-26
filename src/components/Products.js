import React, { useState, useEffect } from "react";
import {  NavLink } from "react-router-dom";
import formatCurrency from "./FormatCurrency";
import BounceLoader from "react-spinners/BounceLoader";

const Products = () => {
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setFilter(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    getProducts();
  }, []);
 
  
  
  
  

  const Loading = () => {
    return (
      <div className="flex justify-center items-center mt-20 ">
        <BounceLoader
          color={"#3B82F6"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  };

  const filterProduct = (cart) => {
    const updatedList = data.filter((x) => x.category === cart);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center mt-10 mb-8 pb-5  ">
          <button
            className="border-2 px-4 py-0.5 border-black rounded  text-black capitalize mx-4 md:mx-2 transition ease-in-out  duration-500 hover:bg-black hover:text-white mb-2"
            onClick={() => setFilter(data)}
          >
            all
          </button>

          <button
            className="border-2 px-4 py-0.5 border-black rounded  text-black capitalize mx-4 md:mx-2 transition ease-in-out  duration-500 hover:bg-black hover:text-white mb-2"
            onClick={() => filterProduct("men's clothing")}
          >
            men's clothing
          </button>

          <button
            className="border-2 px-4 py-0.5 border-black rounded  text-black capitalize mx-4 md:mx-2 transition ease-in-out  duration-500 hover:bg-black hover:text-white mb-2"
            onClick={() => filterProduct("women's clothing")}
          >
            women's clothing
          </button>

          <button
            className="border-2 px-4 py-0.5 border-black rounded  text-black capitalize mx-4 md:mx-2 transition ease-in-out  duration-500 hover:bg-black hover:text-white mb-2"
            onClick={() => filterProduct("jewelery")}
          >
            jewelery
          </button>

          <button
            className="border-2 px-4 py-0.5 border-black rounded  text-black capitalize mx-4 md:mx-2 transition ease-in-out  duration-500 hover:bg-black hover:text-white mb-2 "
            onClick={() => filterProduct("electronics")}
          >
            electronics
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {filter.map((product) => {
            return (
              <div
                className=" text-center  border rounded p-2 "
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px]  "
                />
                <div>
                  <h5 className=" font-bold text-2xl">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="my-4">{formatCurrency(product.price)}</p>
                </div>
                <NavLink
                  to={`/products/${product.id}`}
                  className="flex flex-col justify-center items-center mx-auto  rounded py-2 font-medium border-2 border-black text-black capitalize hover:bg-black hover:text-white transition ease-in-out  duration-500"
                >
                  buy now
                </NavLink>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="max-w-[1240px] mx-auto my-10 py-10  ">
    <div>
        <h1 className="text-4xl text-center uppercase ">lasted products</h1>
        <div className="w-24 h-[2px] bg-black mx-auto mt-3 "></div>
      </div>
      <div >{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
      
  );
};

export default Products;
