import React from "react";
import { Link } from "react-router-dom";
import "./plant-card.css";

export default function PlantCard({ data }) {
  return (
    <Link to={`/details/${data.id}`}>
      <div className="card">
        <img className="card-image" src={data.image} alt="plant" />
        <p className="card-title">{data.name}</p>
      </div>
    </Link>
  );
}
