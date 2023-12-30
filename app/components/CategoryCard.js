import Image from "next/image";
import React from "react";
import makeup from "../../assets/makeup.jpg";
import Link from "next/link";

const CategoryCard = ({name}) => {
  return (
    <>
      <div className="flex flex-col w-max min-w-mix bg-red-200  border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <Link href='/category/[id]' as={`/category/${name}`} >
        <Image
          className="rounded-t-xl"
          src={makeup}
          width={300}
          height={300}
          priority={true}
          alt="Image Description"
          />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-center text-gray-800 dark:text-white">
           {name}
          </h3>
        </div>
          </Link>
      </div>
    </>
  );
};

export default CategoryCard;
