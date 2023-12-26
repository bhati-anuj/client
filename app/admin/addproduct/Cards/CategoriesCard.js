'use client'
import React, { useState } from "react";

const CategoriesCard = ({setCategory,setProduct,setSubCategory}) => {
  const [filterCategory, setFilterCategory] = useState({});
  const [filterSubCategory, setFilterSubCategory] = useState({});

  const catObj = [
    {
      name: "Makeup",
      subCat: [
        {
          subname: "Eyes",
          product: ["Kajal", "Eyeliner", "Mascara"],
        },
        {
          subname: "Face",
          product: ["Face Primer", " Foundation", "Compact"],
        },
        {
          subname: "Lips",
          product: ["Lipstick", "Lip Gross", "Lip Liner"],
        },
      ],
    },

    {
      name: "Hair",
      subCat: [
        {
          subname: "Hair Care",
          product: ["Shampoo", "Hair Oil", "Conditioner"],
        },
        {
          subname: "Hair Styling",
          product: ["Hair Color", " Hair Spray", "Gels & Waxes"],
        },
        {
          subname: "Tools",
          product: ["Hair Combs", "Hair Brushes", "Dryers"],
        },
      ],
    },
    {
      name: "Skin",
      subCat: [
        {
          subname: "Moisturizer",
          product: ["Face Moisturizer", "Face Oils", "Serums"],
        },
        {
          subname: "Masks",
          product: ["Sheet Masks", "Sleeping Masks", "Face Packs"],
        },
        {
          subname: "Body Care",
          product: ["Body Butter", "Massage Oil", "Soaps"],
        },
      ],
    },
  ];

  const handleCategory = (e) => {
    const categoryName = e.target.value;
    setCategory(e.target.value);
    const filterCategoryObj = catObj.find((item) => item.name === categoryName);

    if (filterCategoryObj) {
      setFilterCategory(filterCategoryObj);
    } else {
      console.error("Category not found");
    }
  };

  const handleSubCategory = (e) => {
    const subCategoryName = e.target.value;
    setSubCategory(e.target.value)
    const filterSubCategoryObj = filterCategory.subCat.find(
      (item) => item.subname === subCategoryName
    );

    if (filterSubCategoryObj) {
      setFilterSubCategory(filterSubCategoryObj);
    } else {
      console.error("Sub-Category not found");
    }
  };

  const handleProduct=(e)=>{
    const productName = e.target.value;
    setProduct(e.target.value);
    
  }

  return (
    <>
      <div>
        <label htmlFor="category-select" className="block text-sm font-medium mb-2 dark:text-white">
          Category
        </label>
        <select
          id="category-select"
          onChange={handleCategory}
          className="select-dropdown py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        >
          <option value="">Select a category</option>
          {catObj.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subcategory-select" className="block text-sm font-medium mb-2 dark:text-white">
          Sub-Category
        </label>
        <select
          id="subcategory-select"
          onChange={handleSubCategory}
          className="select-dropdown py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          disabled={!filterCategory.subCat || filterCategory.subCat.length === 0}
        >
          <option value="">Select a sub-category</option>
          {filterCategory.subCat &&
            filterCategory.subCat.map((item, index) => (
              <option key={index} value={item.subname}>
                {item.subname}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="product-select" className="block text-sm font-medium mb-2 dark:text-white">
          Product Type
        </label>
        <select
          id="product-select"
          onChange={handleProduct}
          className="select-dropdown py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          disabled={!filterSubCategory.product || filterSubCategory.product.length === 0}
        >
          <option value="">Select a product type</option>
          {filterSubCategory.product &&
            filterSubCategory.product.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default CategoriesCard;
