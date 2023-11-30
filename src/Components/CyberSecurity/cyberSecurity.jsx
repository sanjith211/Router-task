import React from "react";
import { cyberScienceData } from "./cyberSecurityData.jsx";
import "./cyberSecurity.css";

const CyberSecurity = () => {
  return (
    <div>
      <div>
        <div className="cyberSecurity-container">
          {cyberScienceData.map((course) => (
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

export default CyberSecurity;
