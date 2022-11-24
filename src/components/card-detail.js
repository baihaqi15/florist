import React from "react";
import "./card-detail.css";

export default function CardDetail({ data }) {
  return (
    <div className="detail">
      <img className="detail-image" src={data.image} alt="plant" />
      <div className="detail-content">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
