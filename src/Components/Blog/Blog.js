import React from "react";

import Card from "react-bootstrap/Card";
import blog from "../../images/blog.png";

const Blog = () => {
  return (
    <div>
      <div className="header-container">
        <div>
          <img src={blog} alt="" />
        </div>
        <div className="quiz-header">
          <h1>Best Web Development Blogs </h1>
          <p>
            <li>A List Apart</li>
            <li>Codrops</li>
            <li>Css Author</li>
            <li>CSS-Tricks</li>
          </p>
        </div>
      </div>

      <Card>
        <Card.Title as="h2">whats is the purpose of react router</Card.Title>
        <Card.Body>
          <Card.Text>
            <p>
              <strong>React Router</strong> is a standard library for routing in
              React. It enables the navigation among views of various components
              in a React Application, allows changing the browser URL, and keeps
              the UI in sync with the URL.
            </p>
            <p>
              Let us create a simple application to React to understand how the
              React Router works. The application will contain three components:
              home component, about a component, and contact component. We will
              use React Router to navigate between these components.
            </p>
          </Card.Text>
        </Card.Body>

        <Card.Title as="h2">How does context API works</Card.Title>
        <Card.Body>
          <Card.Text>
            <p>
              The React Context API is{" "}
              <strong>
                a way for a React app to effectively produce global variables
                that can be passed around
              </strong>
              . This is the alternative to "prop drilling" or moving props from
              grandparent to child to parent, and so on. Context is also touted
              as an easier, lighter approach to state management using Redux.
            </p>
            <p>
              Context API is a (kind of) new feature added in version 16.3 of
              React that allows one to share state across the entire app (or
              part of it) lightly and with ease.
            </p>
          </Card.Text>
        </Card.Body>

        <Card.Title as="h2">What is useRaf and how does it work?</Card.Title>
        <Card.Body>
          <Card.Text>
            <p>
              useRef{" "}
              <strong>
                returns a mutable ref object whose .current property is
                initialized to the passed argument ( initialValue ).
              </strong>{" "}
              The returned object will persist for the full lifetime of the
              component. Essentially, useRef is like a “box” that can hold a
              mutable value in its .current property.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
