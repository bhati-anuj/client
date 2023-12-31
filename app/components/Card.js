import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = (props) => {
  // console.log(props.product);

  return (
    <>
      {/* <!-- Card Blog --> */}
      {/* <div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
      {/* <div className="py-3 mb-6 flex items-center text-xl font-bold text-gray-800 uppercase before:flex-[1_1_0%] before:border-t before:border-red-700 before:me-6 after:flex-[1_1_0%] after:border-t after:border-red-700 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Trending Now</div> */}

      {/* <!-- Grid --> */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/* <!-- Card --> */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <Link
          className="flex flex-col group   border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          href="/product/[id]"
          as={`/product/${props.product.name}`}
          
        >
          <div className="relative  pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden ">
            <Image
              className=" absolute top-0 start-8 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
              src={props.product.img}
              width={350}
              height={100}
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5 ">
            <h3 className="text-lg font-bold  text-gray-800 dark:text-white">
              {props.product.name}
            </h3>

            <div className="mt-1 text-gray-500 dark:text-gray-400">
              <div className="flex justify-between">
                <p className="text-lg  text-gray-800 font-medium dark:text-white">
                  ₹{props.product.price}
                  <span className="text-lg line-through ms-2 font-medium  text-red-800 dark:text-red-800">
                    ₹{props.product.price}
                  </span>
                </p>
                
              </div>
              <p>Save ₹125 </p>
              <p>
                <span className="text-green-800 text-lg me-2">★</span>
                {props.product.ratings}{" "}
              </p>
            </div>
          </div>
          {/* <div className="flex  mx-auto gap-10 mb-2"> */}
          <button
            type="button"
            className="py-3 justify-center mx-6 mb-2  inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-gray-600 text-white hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Add to cart
          </button>
          {/* </div> */}
        </Link>
      </div>
      {/* <!-- End Card --> */}

      {/* </div> */}
      {/* <!-- End Grid --> */}
      {/* </div> */}
      {/* <!-- End Card Blog --> */}
    </>
  );
};

export default Card;
