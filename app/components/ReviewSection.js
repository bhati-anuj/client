import React from 'react'
import SimilarProductComponent from './SimilarProductComponent';

const ReviewSection = () => {
    const generateStars = (rating) => {
        const starCount = Math.round(rating); // Round the rating to the nearest whole number
        const stars = "★".repeat(starCount) + "☆".repeat(5 - starCount); // Use ★ for filled star and ☆ for empty star
        return stars;
      };
      const reviewArr = [
        {
          name: "Anuj",
          rating: "4",
          review: "So beautiful So eligent just looking like a wow",
        },
        {
          name: "Kamal",
          rating: "4",
          review: "So beautiful So eligent just looking like a wow",
        },
        {
          name: "Saurabh",
          rating: "3",
          review: "So beautiful So eligent just looking like a wow",
        },
        {
          name: "Anuj",
          rating: "2",
          review: "So beautiful So eligent just looking like a wow",
        },
        {
          name: "Anuj",
          rating: "5",
          review: "So beautiful So eligent just looking like a wow",
        },
      ];
  return (
    <>
        <details>
          <summary
            type="button"
            className="py-3 my-12 cursor-pointer w-full px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-blue-800 text-blue-800 hover:border-blue-500 hover:text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-blue-300 dark:hover:border-blue-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-blue-600"
          >
            Write a review
          </summary>
          <div className="p-4 bg-gray-100 flex flex-col gap-2">
            <input
              type="text"
              required
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Your Name"
            />
            <input
              type="text"
              required
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Your Email"
            />
            <textarea
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              rows="3"
              placeholder="Tell us your views"
            />
            <button
              type="button"
              className="py-3 px-4 ms-auto inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent w-auto bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Post
            </button>
          </div>
        
        </details>
        <div className='flex'>
            <div className='flex-1'>

      
        <h1 className="font-bold text-2xl mb-2 text-gray-600 ">Customer Review:</h1>
      
        {reviewArr.map((item, index) => {
          return (
            <div
              className="rounded border-2 shadow-sm p-2 m-2 mx-4  "
              key={index}
            >
              <div className="flex flex-row gap-2 mb-2 ">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-sm font-semibold text-white leading-none">
                  AN
                </span>
                <h3 className="font-medium text-md text-center italic">
                  {item.name}
                </h3>
              </div>
              <p>{item.review}</p>
              <span>{generateStars(item.rating)}</span>

              
            </div>
          );
        })}
              </div>
            <div className='flex-1 '>

                <SimilarProductComponent/>
            </div>
        </div>
    </>
  )
}

export default ReviewSection