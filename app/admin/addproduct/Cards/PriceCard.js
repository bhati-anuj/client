import React, { useRef } from "react";

const PriceCard = ({ setMrp, setMargin, setActualPrice }) => {
  const mrpRef = useRef();
  const marginRef = useRef();
  const actualPriceRef = useRef();

  const handleMrp=()=>{
    setMrp(mrpRef.current.value)
  }

  const handleMargin =()=>{
    setMargin(marginRef.current.value)
  }

  const handleActualPrice=()=>{
    setActualPrice(actualPriceRef.current.value)
  }

  return (
    <div className="flex p-6 gap-4">
      <div className="relative">
        <label>MRP</label>
        <input
          ref={mrpRef}
          onChange={handleMrp}
          type="number"
          className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        />
      </div>
      <div className="relative">
        <label>Margin</label>
        <input
          ref={marginRef}
          onChange={handleMargin}
          type="number"
          className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        />
      </div>
      <div className="relative">
        <label>Actual</label>
        <input
          ref={actualPriceRef}
          onChange={handleActualPrice}
          type="number"
          className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        />
      </div>
      {/* <div className="relative">
        <label>Inventory</label>
        <input
          type="text"
          className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          
        />
      </div> */}
    </div>
  );
};

export default PriceCard;
