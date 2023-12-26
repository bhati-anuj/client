"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Section2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://salon-server-orky.onrender.com/api/v1/products");

        setProducts(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

 
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="py-3 mb-6 flex items-center text-xl font-bold text-gray-800 uppercase before:flex-[1_1_0%] before:border-t before:border-red-700 before:me-6 after:flex-[1_1_0%] after:border-t after:border-red-700 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
         Trending Now
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((item,index)=>{
            return(

                <Card product={item} key={index}/>
            )
        })}
        </div>
      </div>
    </>
  );
};

export default Section2;
