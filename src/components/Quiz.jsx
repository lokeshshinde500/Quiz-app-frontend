import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetchUrl";

function Quiz() {
  const { quizId } = useParams();

  const {
    data: quiz,
    loading,
    error,
  } = useFetchUrl(
    `https://quiz-app-backend-q7v7.onrender.com/api/quiz/${quizId}`
  );

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz?.quiz?.questions?.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (index, option) => {
    console.log(index)
    console.log(option)

  };

  const handleSubmit = () => {
    console.log(setSelectedAnswers);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!quiz || !quiz.quiz) {
    return <div>No quiz data available.</div>;
  }

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-lg w-full">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">
          {quiz.quiz.title}
        </h1>
        {quiz.quiz.questions.map((q, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-medium text-lg">
              {index + 1}
              {". "}
              {q.question}
            </h2>
            <div className="mt-2 w-full">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <label>
                    <input
                      type="radio"
                      value={q.options.A}
                      name={`answers${index}`}
                      checked={selectedAnswers[index] === q.options.A}
                      onChange={() => handleOptionChange(index, "A")}
                    />
                    <span>A. {q.options.A}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value={q.options.B}
                      name={`answers${index}`}
                      checked={selectedAnswers[index] === q.options.B}
                      onChange={() => handleOptionChange(index, "B")}
                    />
                    <span>B. {q.options.B}</span>
                  </label>
                </div>
                <div className="flex justify-between">
                  <label>
                    <input
                      type="radio"
                      value={q.options.C}
                      name={`answers${index}`}
                      checked={selectedAnswers[index] === q.options.C}
                      onChange={() => handleOptionChange(index, "C")}
                    />
                    <span>C. {q.options.C}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value={q.options.D}
                      name={`answers${index}`}
                      checked={selectedAnswers[index] === q.options.D}
                      onChange={() => handleOptionChange(index, "D")}
                    />
                    <span>D. {q.options.D}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
        {submitted && (
          <div className="mt-4 text-gray-800">
            <h3 className="font-semibold">Your Answers:</h3>
            <ul>
              {selectedAnswers.map((answer, index) => (
                <li key={index} className="mb-1">
                  {quiz.quiz.questions[index]?.question}:{" "}
                  {answer || "Not Answered"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
