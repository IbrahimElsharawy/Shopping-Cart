import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart, addCart } from "../redux/actions/type";
import { NavLink } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const delProduct = (product) => {
    dispatch(delCart(product));
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const product = (product) => {
    return (
      <div
        className="px-4 my-5 bg-white rounded py-5 overflow-x-hidden "
        key={product.id}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div>
            <img
              className=" h-[400px] w-[400px] mx-auto  "
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="text-center md:text-left">
            <h6 className="mt-2 md:mt-4 mb-1 md:mb-2 text-xl md:text-2xl lg:text-3xl font-thin">
              {product.title}
            </h6>
            <p className="my-4 md:my-6 text-xl md:text-3xl font-bold">
              {product.qty} * ${product.price} = ${product.qty * product.price}
            </p>

            <button
              className="bg-blue-500 rounded text-white p-1 mr-4 "
              onClick={() => delProduct(product)}
            >
              <AiOutlineMinus />
            </button>
            <button
              className="bg-blue-500 rounded text-white p-1  "
              onClick={() => addProduct(product)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className=" bg-slate-50	rounded relative -z-10 py-5 my-5 h-[200px]  ">
        <div className="py-4">
          <div>
            <h3 className="text-base md:text-2xl lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
              Your Cart is Empty
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div>
        <div className="mb-5  text-center">
          <NavLink
            to="/checkout"
            className="bg-blue-500 px-2 py-2  text-white rounded"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(product)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
