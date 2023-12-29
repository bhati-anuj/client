import React, { useRef } from "react";

const TitleCard = ({setProductTitle,setProductDescription}) => {
  const titleRef = useRef();
  const descRef = useRef();

const handleTitle =()=>{
  setProductTitle(titleRef.current.value);
}

const handleDescription =()=>{
  setProductDescription(descRef.current.value);
}
  return (
    <div>
      <div>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Title
        </label>
        <input
          ref={titleRef}
          onChange={handleTitle}
          type="text"
          className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"

        />
      </div>
      <div>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Description
        </label>
        <textarea
          ref={descRef}
          onChange={handleDescription}
          className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          rows="3"
          
        ></textarea>
      </div>
    </div>
  );
};

export default TitleCard;
