import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <img className="about-image" src="logo.png" alt="plant" />
      <div className="about-content">
        <h2 className="about-title">Florist App</h2>
        <p className="about-title">
          This application is useful for displaying a collection of plants. The
          user can search for a plant by name, and the application will display
          the plant's name and image. The user can also click on the plant's
          image to see more details about the plant.
        </p>
      </div>
    </div>
  );
}
