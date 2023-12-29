"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const SimilarProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/api/v1/products`
        );

        setProducts(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (products.length > 0) {
    return (
      <>
        <div className="max-w-[85rem] px-4   sm:px-6 lg:px-8  mx-auto">
          <h1 className="font-bold text-2xl mb-2 text-gray-600 ">
            Similar Product
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products &&
              products.map((item, index) => {
                return <Card product={item} key={index} />;
              })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
         No Similar Product Found
          </div>
        </div>
      </div>
    );
  }
};

export default SimilarProductComponent;
