"use client";
import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

const ProductDetails = ({ productDes }) => {
  console.log(productDes), "modal";
  if (productDes) {
    return (
      <>
        <div className="grid grid-cols-4 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-4">
            <Image src={productDes.img} width={100} height={100} alt="product-image"/>
          </div>
          <div className="col-span-2 col-start-3">{productDes.name}</div>
          <div className="col-span-2 col-start-3 row-start-2">MRP:₹{productDes.price}</div>
          {/* <div className="col-start-3 row-start-3">4</div>
          <div className="col-start-4 row-start-3">5</div> */}
        </div>
      </>
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
  return (
    <>
      <div className="flex ">
        <div>
          <Image
            src={productDes.img}
            width={100}
            height={100}
            alt="product-image"
          />
        </div>
        <div>
          <h1>Price</h1>
          <p>{productDes.price}</p>
        </div>
      </div>
    </>
  );
};

const DescriptionModal = ({ product }) => {
  const productObject = product;
  //   console.log(product);

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="">View Details</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-md" />
          <Dialog.Content className="data-[state=open]:animate-contentShow  fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              <div className="p-3 sm:p-1">
                <div className="text-center">
                  <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Product Details
                  </h2>
                </div>
              </div>
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal"></Dialog.Description>
            <ProductDetails productDes={productObject} />
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default DescriptionModal;
