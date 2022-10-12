import React from "react";
import { useLoaderData } from "react-router-dom";
import TotalQuiz from "../TotalQuiz/TotalQuiz";

const QuizList = () => {
  const quizLists = useLoaderData();

  return (
    <div>
      <div>
        <h1>Quiz Name: {quizLists.data.name}</h1>
      </div>

      <div>
        {quizLists.data.questions.map((quiz) => (
          <TotalQuiz key={quiz.id} quiz={quiz}></TotalQuiz>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
