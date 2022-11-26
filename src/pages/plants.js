import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "../components/plant-card";

export default function Plants() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          "https://637ecd84cfdbfd9a63b76e05.mockapi.io/plants"
        );
        setData(results.data);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <div className="card-list">
      {/* data dari api di map lalu dikirim ke komponen plant card */}
      {data.map((plant) => (
        <PlantCard data={plant} key={plant.id} />
      ))}
    </div>
  );
}
