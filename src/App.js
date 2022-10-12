import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Topics from "./Components/Topics/Topics";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import QuizList from "./Components/QuizList/QuizList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("data.json"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("data.json"),
          element: <Home></Home>,
        },

        {
          path: "/quizList/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizList></QuizList>,
        },

        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <h1>
          {" "}
          This page is messing: 404 <Link to="/home">Please click!</Link>
        </h1>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
