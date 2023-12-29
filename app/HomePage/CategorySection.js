import React from "react";
import CategoryCard from "../components/CategoryCard";

const CategorySection = () => {
  const arr = ["Skin", "Makeup", "Hair"];
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="py-3 mb-6 flex items-center text-xl font-bold text-gray-800 uppercase before:flex-[1_1_0%] before:border-t before:border-red-700 before:me-6 after:flex-[1_1_0%] after:border-t after:border-red-700 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
          Best Category
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arr.map((item, index) => {
            return <CategoryCard key={index} name={item} />;
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="w-1/2  py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          View All
        </button>
      </div>
    </>
  );
};

export default CategorySection;
