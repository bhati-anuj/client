import React from "react";

const ReviewForm = () => {
  return (
    <>
      <button
        type="button"
        className="hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        id="hs-basic-collapse"
        data-hs-collapse="#hs-basic-collapse-heading"
      >
        Collapse
        <svg
          className="hs-collapse-open:rotate-180 flex-shrink-0 w-4 h-4 text-white"
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
        id="hs-basic-collapse-heading"
        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-collapse"
      >
        <div className="mt-5">
          <p className="text-gray-500 dark:text-gray-400">
            This is a collapse body. It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as
            the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
