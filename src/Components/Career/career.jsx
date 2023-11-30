import React from "react";
import { careerData } from "./careerData";
import "./career.css";

const Career = () => {
  return (
    <div>
      <div>
        <div className="career-container">
          {careerData.map((course) => (
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

export default Career;
