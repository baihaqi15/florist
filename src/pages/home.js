import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../components/cardCategory";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      setError(false);

      try {
        const results = await axios(
          "https://637ecd84cfdbfd9a63b76e05.mockapi.io/categories"
        );
        setData(results.data);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <h1>Welcome to Plants Gallery</h1>
      <p className="home-description">
        Plants are predominantly photosynthetic eukaryotes of the kingdom
        Plantae. Historically, the plant kingdom encompassed all living things
        that were not animals, and included algae and fungi; however, all
        current definitions of Plantae exclude the fungi and some algae, as well
        as the prokaryotes (the archaea and bacteria). By one definition, plants
        form the clade Viridiplantae (Latin name for "green plants") which is
        sister of the Glaucophyta, and consists of the green algae and
        Embryophyta (land plants). The latter includes the flowering plants,
        conifers and other gymnosperms, ferns and their allies, hornworts,
        liverworts, and mosses.
      </p>
      <h2 className="home-description">Category by Climate</h2>
      <div className="category-list">
        {/* data dari api di map lalu dikirim ke komponen category */}
        {data.map((category) => (
          <Category data={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}
