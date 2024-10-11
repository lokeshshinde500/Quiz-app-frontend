import React from "react";
import QuizBox from "../components/QuizBox";
import QuizSkeleton from "../components/QuizSkeleton";
import useFetchUrl from "../hooks/useFetchUrl";

export default function Home() {
  // Use the custom hook to fetch quizzes
  const {
    data: quizzes,
    loading,
    error,
  } = useFetchUrl("https://quiz-app-backend-q7v7.onrender.com/api/quiz");

  return (
    <>
      <section className="section-quiz">
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-1">
            {!quizzes ? (
              <>
                <QuizSkeleton key={0} />
                <QuizSkeleton key={1} />
                <QuizSkeleton key={2} />
                <QuizSkeleton key={3} />
                <QuizSkeleton key={4} />
                <QuizSkeleton key={5} />
              </>
            ) : (
              <>
                {quizzes.quizzes.map((quiz) => (
                  <QuizBox key={quiz._id} quiz={quiz} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
