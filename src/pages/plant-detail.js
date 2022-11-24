import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetail from "../components/card-detail";

export default function PlantDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios(
          "https://637ecd84cfdbfd9a63b76e05.mockapi.io/plants/" + id
        );
        setData(results.data);
      } catch (err) {}
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1 className="plant-title">Plant Detail</h1>
      {data && <CardDetail data={data} />}
    </div>
  );
}
