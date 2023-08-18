import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { AiFillStar } from "react-icons/ai";
import formatCurrency from "./FormatCurrency";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/type";

const Product = () => {
  const {id} = useParams();
  const [product , setProduct]   = useState([]);
  const [loading, setLoading]= useState(false);
  
   const dispatch = useDispatch();

   const addProduct=(product)=>{
    dispatch(addCart(product));
   };

   

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="flex justify-center items-center mt-20">
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

  const ShowProduct = () => {
    return (
  <div className="grid grid-cols-1 md:grid-cols-2   ">
        <div >
          <img
            src={product.image}
            alt={product.title}
            className="w-[400px] h-[400px] px-4"
          />
        </div>
        <div className="px-4">
          <h4 className="uppercase text-gray-500 font-medium">{product.category}</h4>
          <h1 className="mt-2 md:mt-4 mb-1 md:mb-2 text-xl md:text-3xl lg:text-5xl font-thin">{product.title}</h1>
          <p className="flex justify-start items-center font-bold text-xl md:text-2xl">
            Rating {product.rating && product.rating.rate} <AiFillStar />
          </p>
          <h3 className="my-4 md:my-6 text-2xl md:text-4xl font-bold">{formatCurrency(product.price)}</h3>
          <p className="text-gray-600 first-letter:capitalize">{product.description}</p>
          <button onClick={()=>addProduct(product) } className="mt-4 mr-4 btn text-black py-2 px-4 border rounded border-black hover:bg-black hover:text-white transition duration-200 ease-in">Add to cart</button>
          <NavLink to="/cart"  className="mt-4  btn text-white bg-black py-2 px-4 border rounded border-black hover:bg-white hover:text-black transition duration-200 ease-in">Go to cart</NavLink>
        </div>
      </div>
    
    );
  };

  return (
         <div className="max-w-[1240px] mx-auto my-10 py-10 ">
        <div>{loading ? <Loading/> : <ShowProduct/>}</div>
      </div>
    
  );
};

export default Product;
