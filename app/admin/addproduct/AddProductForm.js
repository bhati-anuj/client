'use client'
import React, { useState } from "react";
import CategoriesCard from "./Cards/CategoriesCard";
import VarientCard from "./Cards/VarientCard";
import TitleCard from "./Cards/TitleCard";
import MediaCard from "./Cards/MediaCard";
import PriceCard from "./Cards/PriceCard";
import OtherCard from "./Cards/OtherCard";
import TermsCard from "./Cards/TermsCard";
import axios from "axios";

const AddProductForm = () => {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [product, setProduct] = useState();
  
  const [productTitle, setProductTitle] = useState();
  const [productDescription, setProductDescription ] = useState();

  const [images, setImages] = useState();

  const [mrp, setMrp] = useState();
  const [margin, setMargin] = useState();
  const [actualPrice, setActualPrice] = useState();


// console.log(category);
// console.log(subCategory);
// console.log(product);
// console.log(productTitle);
// console.log(productDescription);
// console.log(mrp);
// console.log(margin);
// console.log(actualPrice);

const handleAddProduct=async()=>{

  const formData = new FormData();
  formData.append("category", category.toLowerCase())
  formData.append("subCategory" , subCategory.toLowerCase())
  formData.append("subSubCategory",product)
  formData.append("name", productTitle)
  formData.append('brand', 'loreal');
  formData.append("description", productDescription)
  formData.append("MRP", mrp)
  formData.append("marginPer", margin)
  formData.append("price", actualPrice)
  formData.append("photo", images)


 await axios.post("https://salon-server-orky.onrender.com/api/v1/products/addProduct", formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
  .then(response => {
    console.log('Success:', response.data);
    // Handle success, e.g., show a success message to the user
  })
  .catch(error => {
    console.error('Error:', error.response.data);
    // Handle error, e.g., show an error message to the user
  });
}

  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <button
      onClick={handleAddProduct}
        type="button"
        className="py-3 mb-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Add Product
      </button>
      <div className="grid grid-cols-3 grid-rows-8 gap-4">
        <div className="bg-white p-6">
          <CategoriesCard setCategory={setCategory} setSubCategory={setSubCategory} setProduct={setProduct}  />
        </div>
        <div className="col-span-2 bg-white p-6">
          <TitleCard setProductTitle={setProductTitle} setProductDescription={setProductDescription}/>
        </div>
        <div className="row-start-2 bg-white">
          <VarientCard />
        </div>
        <div className="col-span-2 row-span-2 row-start-2 bg-white ">
          <MediaCard setImages={setImages} />
        </div>
        <div className="col-span-2 col-start-2 row-start-4 bg-white">
          <PriceCard setMrp={setMrp} setMargin={setMargin} setActualPrice={setActualPrice} />
        </div>
        {/* <div className="col-span-2 col-start-2 row-start-5 bg-white"><OtherCard/></div> */}
        {/* <div className="col-span-2 row-span-3 col-start-2 row-start-6 bg-white">
          <TermsCard/>
        </div> */}
      </div>
    </div>
  );
};

export default AddProductForm;
