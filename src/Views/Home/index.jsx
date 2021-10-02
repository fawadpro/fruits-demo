import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import config from "../../config";
import Card from "../../Components/Card";
import Statistics from "../../Components/Statistics";
import "./home-style.scss";

const Home = () => {
  const [fruits, setFruits] = useState(false);
  const [fruitsLoader, setFruitsLoader] = useState(false);
  const [nutrition, setUpdateNutrition] = useState({});

  useEffect(() => {
    fetchAllFruits();
  }, []);

  useMemo(() => {
    setUpdateNutrition(fruits && fruits[0]);
  }, [fruits]);

  const getNeturitionValue = (value) => {
    setUpdateNutrition(value);
  };

  const fetchAllFruits = () => {
    setFruitsLoader(true);
    axios.get(`${config.apiPath}/api/fruits/all`).then((res) => {
      setFruitsLoader(false);
      setFruits(res.data);
    });
  };
  document.title = "Fruites | Home Screen";

  return (
    <div className="home-container">
      <div className="home-container-body">
        <div className="home-left-container">
          <div className="main-title">Fruit List</div>
          {fruitsLoader ? (
            <div className="spinner-space-top">
              <Loader type="Puff" color="#0E6CDF" height={100} width={100} />
            </div>
          ) : (
            fruits &&
            fruits.map((item, index) => (
              <Card
                item={item}
                key={index}
                getNeturitionValue={getNeturitionValue}
              />
            ))
          )}
        </div>
        {fruitsLoader ? null : (
          <div className="chart-container">
            <Statistics nutrition={nutrition} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
