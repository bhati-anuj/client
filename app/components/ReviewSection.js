"use client";
import React, { useEffect, useRef, useState } from "react";
import SimilarProductComponent from "./SimilarProductComponent";
import axios from "axios";

const ReviewSection = ({ productId }) => {
 
  const [reviewArr, setReviewArr] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/${productId}`);
        setReviewArr(res.data.data.reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const ratingRef = useRef();

  const generateStars = (rating) => {
    const starCount = Math.round(rating); // Round the rating to the nearest whole number
    const stars = "★".repeat(starCount) + "☆".repeat(5 - starCount); // Use ★ for filled star and ☆ for empty star
    return stars;
  };

  const handlePostReview = async () => {
    const reviewObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      text: textRef.current.value,
      rating: ratingRef.current.value,
    };

    try {
      const res = await axios.patch(`/api/review/${productId}`, reviewObj);
      console.log(res);
      if (res.status != 201) {
        alert("Something went wrong");
      } else alert("Reviw Post Successfully");
    } catch (error) {
      console.error(error);
    }
  };

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
            ref={nameRef}
            type="text"
            required
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Your Name"
          />
          <input
            ref={ratingRef}
            type="number"
            required
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Rating"
          />
          <input
            type="text"
            ref={emailRef}
            required
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Your Email"
          />
          <textarea
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            rows="3"
            ref={textRef}
            placeholder="Tell us your views"
          />
          <button
            onClick={handlePostReview}
            type="button"
            className="py-3 px-4 ms-auto inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent w-auto bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Post
          </button>
        </div>
      </details>
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-bold text-2xl mb-2 text-gray-600 ">
            Customer Review:
          </h1>

          {!reviewArr ? (
            <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
              <div className="flex justify-center">
                <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          ) : reviewArr.length > 0 ? (
            reviewArr.map((item, index) => {
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
                  <p>{item.text}</p>
                  <span>{generateStars(item.rating)}</span>
                </div>
              );
            })
          ) : (
            <>
              <p>No Review for this product</p>
            </>
          )}
        </div>
        <div className="flex-1 ">
          <SimilarProductComponent />
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
