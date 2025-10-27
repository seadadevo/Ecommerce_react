import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div
        key={product.id}
        className="bg-[#29235c] rounded-2xl p-4 text-white shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-3 rounded-lg bg-white"
        />
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-yellow-400 font-bold">${product.price}</span>
          <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
