import React from "react";
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    
    <div className="relative w-full h-[60vh] md:h-[100vh] text-white bg-white rounded-b-xl">
      <img
        src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?auto=format&fit=crop&w=1200&q=80"
        alt="Clothes controller on a Body"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Next-Gen Clothes at Your Body
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Discover the latest clothes innovations with unbeatable prices and
          free shipping on all orders.
        </p>

        <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
          <Link to={"/products"}>Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default MidBanner;
