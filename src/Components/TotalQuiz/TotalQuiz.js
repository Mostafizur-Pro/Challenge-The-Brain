import React from "react";
import "./TotalQuiz.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const TotalQuiz = ({ quiz }) => {
  const { question, options, id } = quiz;

  const eye = (options) => {
    toast(quiz.correctAnswer);
  };

  const notify = (option) => {
    console.log(quiz.correctAnswer);

    if (option === quiz.correctAnswer) {
      toast("Wow! Answare is Right!");
    } else {
      toast("Ops! The answare is Wrong!");
    }
  };

  console.log(quiz);
  return (
    <Card className="quiz">
      <Card.Header className="bg-dark text-white">
        {" "}
        <strong>{question}</strong>
      </Card.Header>

      <Card.Body>
        <div>
          <FontAwesomeIcon onClick={() => eye(options)} icon={faEye} />

          <Row xs={1} md={2} className="g-4">
            {options.map((option) => (
              <div>
                <p className="option">
                  <input
                    onClick={() => notify(option)}
                    type="radio"
                    name="html"
                    id="htmo"
                  />
                  {option}
                  <ToastContainer />
                </p>
              </div>
            ))}
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TotalQuiz;
