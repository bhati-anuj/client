'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import AllProductTable from "./AllProductTable";

const LandingPage = () => {
const [allProduct, setAllProduct] = useState();
const { signal } = new AbortController()


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api',{ signal },{ cache: 'no-store' },{ next: { revalidate: 1 } });

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setAllProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);
if (!allProduct) {
  return(
    <>
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
    <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div className="flex justify-center">
      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>
    </div>
  </>
  )
  
}
if (allProduct.length > 0) {
  return (
    <>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
       
       <AllProductTable allproduct={allProduct} />
      </div>
    </>
  );
}
else {
  return (
    <>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        No Product Added 
      </div>
    </>
  );
}

};

export default LandingPage;
