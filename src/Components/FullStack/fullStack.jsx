import React from "react";
import { fullStackData } from "./fullStackData";
import "./fullStack.css";

const FullStack = () => {
  return (
    <div>
      <div className="fullStack-container">
        {fullStackData.map((course) => (
          <div key={course.id} className="container">
            <img src={course.imgUrl} alt={course.title} />
            <h3>{course.topic}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStack;
