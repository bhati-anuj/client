"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SecondHeader from "@/app/components/SecondHeader";
import React, { useEffect, useState } from "react";
import Card from "@/app/components/Card";
import CategoryPageComponent from "./CategoryPageComponent";
import axios from "axios";

const CategoryPageComponent = ({ params }) => {
  const decodedName = decodeURIComponent(params.id).toLowerCase();
  const [categoryProduct, setCategoryProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/category", {
          category: `${decodedName}`,
        });
        setCategoryProduct(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!categoryProduct) {
    return (
      <>
        <Header />
        <SecondHeader />
        <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
              <div
                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  if (categoryProduct.length > 0) {
    return (
      <>
        <Header />
        <SecondHeader />
        <div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <div className="py-3 mb-6 flex items-center text-xl font-bold text-gray-800 uppercase before:flex-[1_1_0%] before:border-t before:border-red-700 before:me-6 after:flex-[1_1_0%] after:border-t after:border-red-700 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Best 10 Product
              </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProduct &&
              categoryProduct.map((item, index) => {
                return <Card product={item} key={index} />;
              })}
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <SecondHeader />
        <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
              <p>No Product Available</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default CategoryPageComponent;
