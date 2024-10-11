import React from "react";

export default function QuizSkeleton() {
  return (
    <>
      <div className="quiz-box">
        <div className="bg-white shadow-lg rounded-lg flex justify-between items-center p-6 mb-4">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-gray-800">{"      "}</h2>
            <p className="text-gray-600 mt-2">{"        "}</p>
            <div className="flex mt-4">
              <span className="text-sm text-gray-500 mr-4">
                {"         "}: <strong>{"       "}</strong>
              </span>
              <span className="text-sm text-gray-500">
                {"         "}: <strong>{"       "}</strong>
              </span>
            </div>
          </div>
          <button className="ml-4 bg-gray-300 text-white font-semibold px-10 py-4 rounded hover:bg-green-600 transition duration-200">
            
          </button>
        </div>
      </div>
    </>
  );
}
