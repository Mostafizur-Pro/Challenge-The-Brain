import React from "react";
import List from "../List/List";
import "./Quiz.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Quiz = ({ quiz, handlerAddToQuiz }) => {
  const { name, logo, total, id } = quiz;
  return (
    <div>
      <Card className="quizlist-container" style={{ width: "18rem" }}>
        <Card.Img className="header-img" variant="top" src={logo} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h3>Name: {name}</h3>
            <p> Total Quiz : {total}</p>
            <Link to={`/quizList/${id}`}>
              {" "}
              <Button variant="primary"> View Quiz</Button>
            </Link>
          </Card.Title>
          {/* <Button onClick={() => handlerAddToQuiz(id)} variant="primary">
            Start Practics
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;
