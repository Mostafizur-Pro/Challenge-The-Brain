import React from "react";
import "./Home.css";

import home from "../../images/home.webp";

import { Link, useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizes = useLoaderData();

  const handlerAddToQuiz = (id) => {
    const remaining = quizes.filter((quizReact) => quizReact.id === id);
    if (remaining[0].id) {
      <Link to={`/quizList/${id}`}></Link>;
      console.log(remaining[0].id);
    }
  };

  return (
    <div>
      <div className="header-container">
        <div>
          <h1>Is Web Development a Good Career?</h1>
          <p>
            Web development has a number of pros: High earning potential,
            opportunity for growth, and flexibility are usually top of mind for
            most who get into the industry.{" "}
          </p>
          <p>
            Some of the challenges for people who pursue web development is the
            competitive nature of the job market{" "}
          </p>
        </div>
        <div>
          <img src={home} alt="" />
        </div>
      </div>
      <div className="list-container">
        {quizes.map((quiz) => (
          <Quiz
            key={quiz.id}
            quiz={quiz}
            handlerAddToQuiz={handlerAddToQuiz}
          ></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
