import  { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { defaultSliderSettings } from "../utils/sliderSettings";
import { Link } from "react-router-dom";

const Carosual = () => {
  const { data, fetchAllProducts, categories } = useContext(DataContext);
  console.log("DATA FROM CONTEXT:", data);
  console.log("Cateogies:", categories);
  useEffect(() => {
    fetchAllProducts();
  }, []);


  return (
    <div className="overflow-x-hidden">
      <Slider {...defaultSliderSettings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
            >
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering Your world with the best in Clothes
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                    <Link to={'/products'}>Shop Now</Link>
                  </button>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[350px] hover:scale-105 transition-all 
                    shadow-2xl shadow-red-400 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carosual;
