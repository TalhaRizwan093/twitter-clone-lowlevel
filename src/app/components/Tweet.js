import React from "react";

const Tweet = ({ tweet, auther, date }) => {
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-auto"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {tweet}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{auther}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
      </a>
    </>
  );
};

export default Tweet;
