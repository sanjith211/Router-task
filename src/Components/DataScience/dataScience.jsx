import React from "react";
import { dataScienceData } from "./dataScienceData";
import "./dataScience.css";

const DataScience = () => {
  return (
    <div>
      <div>
        <div className="dataScience-container">
          {dataScienceData.map((course) => (
            <div key={course.id} className="container">
              <img src={course.imgUrl} alt={course.title} />
              <h3>{course.topic}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScience;
