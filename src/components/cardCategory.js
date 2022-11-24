import React from "react";
import { Link } from "react-router-dom";
import "./cardCategory.css";

export default function Category({ data }) {
  return (
    <Link to={`/category/${data.id}`}>
      <div className="category">
        <img className="category-image" src={data.image} alt="category" />
        <h4 div className="category-title">
          {data.name}
        </h4>
      </div>
    </Link>
  );
}
