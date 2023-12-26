import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondHeader = () => {
  const arr = [
    {
      name: "Eye",
      links: ["eyeliner", "kajal", "mashkara", "eyeliner", "kajal", "mashkara"],
    },
    {
      name: "Face",
      links: ["eyeliner", "kajal", "mashkara", "eyeliner", "kajal", "mashkara"],
    },
    {
      name: "Hair",
      links: ["eyeliner", "kajal", "mashkara", "eyeliner", "kajal", "mashkara"],
    },
    {
      name: "Body",
      links: ["eyeliner", "kajal", "mashkara", "eyeliner", "kajal", "mashkara"],
    },
    {
      name: "Eye",
      links: ["eyeliner", "kajal", "mashkara", "eyeliner", "kajal", "mashkara"],
    },
  ];
  return (
    <div className="flex justify-center gap-4 mt-2">
      {arr.map((item, index) => {
        return (
          
            <div
              className="hs-dropdown relative inline-flex [--trigger:hover]"
              key={index}
            >
              <button
                id="hs-dropdown-hover-event"
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium  bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {item.name}
                <svg
                  className="hs-dropdown-open:rotate-180 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full z-50"
                aria-labelledby="hs-dropdown-hover-event"
              >
                {item.links.map((e, index) => {
                  return (
                    <div key={index}>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                        href="#"
                      >
                        {e}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default SecondHeader;
