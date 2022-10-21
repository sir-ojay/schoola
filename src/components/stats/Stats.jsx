import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./stats.scss";

const Stats = ({ style }) => {
  console.log(style.backgroundColor);
  const target = {
    header: "Weekly Target",
    text: "25% achieved",
  };

  return (
    <div
      style={{ backgroundColor: style.backgroundColor }}
      className="statistics"
    >
      <div className="stats--desc">
        <h4>{target.header}</h4>
        <p style={{ color: style.color }}>{target.text}</p>
      </div>

      <hr />

      <div className="stats--Chart">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: style.chartColor,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
          value={25}
          text={"25%"}
          strokeWidth={5}
        />
      </div>
    </div>
  );
};

export default Stats;
