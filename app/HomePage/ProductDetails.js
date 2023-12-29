"use client";
import React from "react";
import Image from "next/image";
import makeup from "../../assets/makeup.jpg";
import ReviewSection from "../components/ReviewSection";

const ProductDetails = () => {
  const productDes = {
    _id: "6582a8bf0b3d4457e6cd02ab",
    name: "3 in1",
    brand: "loreal",
    price: 500,
    category: "makeup",
    subCategory: "hair care",
    subSubCategory: "Hair Oil",
    ingredients: [],
    img: "http://salon-server-orky.onrender.com/img/products/product-3%20in1%20-1703231092523.png",
    ratings: 0,
    reviews: [],
  };

  if (productDes) {
    return (
      <div className="p-10">
        <div className="flex mb-4  flex-wrap">
          <div className="flex-1">
            <Image src={makeup} height={500} width={500} alt="product-image" />
          </div>
          <div className="flex-1">
            <p>
              <span className="text-4xl me-2 ">₹1,799</span>
              <span className="line-through me-2">MRP ₹2,700 </span> Incl. of
              all taxes
            </p>
            <p className="mt-2 text-lg text-red-600">Bhumi Rose Gold Shy</p>
            <p className="bg-gray-200 w-max p-2 rounded mt-2">★(4.5/5)</p>
            <div className="mt-6">
              <p className="font-medium mb-2">Delivery Option</p>
              <div className="flex rounded-lg shadow-sm">
                <input
                  type="number"
                  id="hs-trailing-button-add-on"
                  name="hs-trailing-button-add-on"
                  className="py-3 px-4 block w-full border-red-500 shadow-md rounded-s-lg text-sm focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter 6 digit pincode"
                />

                <button
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-red-500 bg-white text-red-600 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Check
                </button>
              </div>
            </div>
            <div className=" my-6  flex justify-between gap-4">
              <button
                type="button"
                className="py-4 px-4 w-6/12 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent justify-center bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="py-4 px-4 w-6/12  inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Buy Now
              </button>
            </div>
            <details className="border-gray-500 border-b-2 my-4 py-4">
              <summary className="text-xl font-medium text-gray-400 ">DESCRIPTION</summary>
              <p>
                The Inspiration: Discover the Bhumi Rose Gold Shy Ebony Ring,
                where delicate elegance meets hidden strength. Let this ring
                always remind you to embrace your inner resilience.
              </p>
            </details>
            <details className="border-gray-500 border-b-2 my-4 py-4">
              <summary className="text-xl font-medium text-gray-400 ">SHIPPING</summary>
              <ul>
                <li>Free express shipping 30 days return policy 6 month warranty</li>
                <li>International shipments will be delivered in 14 days Brand owned</li>
                <li>and marketed by: Indiejewel Fashions Private Limited 3rd floor,</li>
                
                <li>Magnum Vista, Raghuvanahalli, Bangalore, Karnataka - 560062</li>
                
              </ul>
            </details>
          </div>
        </div>
        <ReviewSection/>
  
      </div>
    );
  } else {
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
    </div>;
  }

};

export default ProductDetails;
