import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlantCard from "../components/plant-card";

export default function PlantCategory() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios(
          "https://637ecd84cfdbfd9a63b76e05.mockapi.io/plants?category=" + id
        );
        setData(results.data);
      } catch (err) {}
    };
    fetchData();
  }, [id]);
  console.log(data);

  return (
    <>
      <div className="card-title"></div>
      <div className="card-list">
        {data.map((plant) => (
          <PlantCard data={plant} key={plant.id} />
        ))}
      </div>
    </>
  );
}
