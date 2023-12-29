import React from 'react'

const OtherCard = () => {
  return (
    <div className="flex p-6 gap-4">
    <div className="relative">
      <label>SKU</label>
      <input
        type="text"
        className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
       
      />
    </div>
    <div className="relative">
      <label>Barcode</label>
      <input
        type="text"
        className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
     
      />
    </div>
    <div className="relative">
      <label>Actual</label>
      <input
        type="text"
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
  )
}

export default OtherCard