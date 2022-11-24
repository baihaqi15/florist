import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "../components/plant-card";

export default function Search() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  const searchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const results = await axios(
        "https://637ecd84cfdbfd9a63b76e05.mockapi.io/plants?search=" + name
      );
      setData(results.data);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={searchData}>Search</button>
      </div>
      <div className="card-list">
        {data.map((plant) => (
          <PlantCard data={plant} key={plant.id} />
        ))}
      </div>
    </>
  );
}
