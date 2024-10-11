import React from "react";
import { Link } from "react-router-dom";

export default function QuizBox({ quiz }) {
  return (
    <div className="quiz-box">
      <div className="bg-white shadow-lg rounded-lg flex justify-between items-center p-6 mb-4">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-green-500">{quiz.title}</h2>
          <p className="text-gray-600 mt-2">{quiz.description}</p>
          <div className="flex mt-4">
            <span className="text-sm text-gray-500 mr-4">
              Total Questions: <strong>{quiz.questions.length}</strong>
            </span>
            <span className="text-sm text-gray-500">
              Total Marks: <strong>{quiz.questions.length}</strong>
            </span>
          </div>
        </div>
        <Link
          to={`${quiz._id}/attempt`}
          className="ml-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Attempt
        </Link>
      </div>
    </div>
  );
}
