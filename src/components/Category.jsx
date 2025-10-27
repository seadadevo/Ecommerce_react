import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Category = () => {
  const { categories, categoriesChoosen, setCategoryClicked } =
    useContext(DataContext);

  return (
    <div className="bg-[#1b173d] w-full min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Categories
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setCategoryClicked(category)}
              className="bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold py-2 px-4 rounded-full shadow-md"
            >
              {category}
            </button>
          ))}
        </div>

        {categoriesChoosen.length > 0 && (
          <>
            <h2 className="text-2xl text-white font-bold mb-4 text-center">
              {categoriesChoosen[0].category.toUpperCase()}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categoriesChoosen.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#29235c] rounded-2xl p-4 text-white shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain mb-3 rounded-lg bg-white"
                  />
                  <h3 className="font-semibold text-lg truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-yellow-400 font-bold">
                      ${item.price}
                    </span>
                    <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {categoriesChoosen.length === 0 && (
          <p className="text-gray-400 text-center mt-10">
            Select a category to view products.
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;
