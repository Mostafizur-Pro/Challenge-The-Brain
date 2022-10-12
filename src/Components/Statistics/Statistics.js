import React, { useEffect, useState } from "react";
import "./Statistics.css";
import statictics from "../../images/statistic.png";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setChart(data.data));
  }, [setChart]);
  return (
    <div>
      <div className="header-container">
        <div>
          <img src={statictics} alt="" />
        </div>
        <div className="quiz-header">
          <h1>All Quiz Chart Here</h1>
          <p>
            Computer programming is the process of performing a particular
            computation (or more generally, accomplishing a specific computing
            result), usually by designing and building an executable computer
            program.{" "}
          </p>
        </div>
      </div>
      <div>
        <h1>Total Quiz Line Chart Given Below : </h1>
        <div className="liveChart">
          <LineChart width={600} height={300} data={chart}>
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
