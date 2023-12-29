import React, { useState } from "react";
import Image from "next/image";
const MediaCard = ({ setImages }) => {
  const [img1, setImg1] = useState();

  const handleAdd = (e) => {
    const file = e.target.files[0];
    setImg1(URL.createObjectURL(file));
    setImages(file);
    // setImg1(URL.createObjectURL(file));
  };

 

  return (
    <>
      {/* <label>Media</label> */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full p-6  ">
        {/* <input type="file" onChange={handleAdd} /> */}
        <input
          type="file"
          onChange={handleAdd}
          style={{ display: img1 ? "none" : "block" }}
          className="col-span-2 row-span-2 bg-gray-100  border-2 text-gray-500 border-gray-400 border-dashed flex justify-center items-center cursor-pointer"
        />
        {img1 && (
          <Image
            className="col-span-2 row-span-2 bg-gray-100  border-2 text-gray-500 border-gray-400 border-dashed flex justify-center items-center cursor-pointer"
            src={img1}
            alt="image"
            width={400}
            height={400}
          />
        )}
        {/* +ADD */}
        {/* </input> */}
        <div className="col-start-3 bg-gray-100  border-2 text-gray-500 border-gray-400 border-dashed flex justify-center items-center cursor-pointer">
          +ADD
        </div>
        <div className="col-start-4 bg-gray-100  border-2 text-gray-500 border-gray-400 border-dashed flex justify-center items-center cursor-pointer">
          +ADD
        </div>
        <div className="col-start-3 row-start-2 bg-gray-100  border-2 text-gray-500 border-gray-400 border-dashed flex justify-center items-center cursor-pointer">
          +ADD
        </div>
        <div className="col-start-4 row-start-2 bg-gray-100  border-2 text-gray-500 border-gray-400 border-dashed flex justify-center items-center cursor-pointer">
          +ADD
        </div>
      </div>
    </>
  );
};

export default MediaCard;
