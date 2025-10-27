import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ProcutCard from "./UI/ProductCard"
const Category = () => {
  const { categories, categoriesChoosen, setCategoryClicked } =
    useContext(DataContext);

  return (
    <div className="bg-gray-100 w-full py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
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
            <h2 className="text-2xl text-black font-bold mb-4 text-center">
              {categoriesChoosen[0].category.toUpperCase()}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categoriesChoosen.map((product) => (
                <ProcutCard product = {product}/>
              ))}
            </div>
          </>
        )}

        {categoriesChoosen.length === 0 && (
          <p className="text-gray-800 text-center mt-10">
            Select a category to view products.
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;
