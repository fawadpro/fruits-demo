import React from "react";

import { StaticData } from "../../utils/static-data";
import "./card-style.scss";

const Card = ({ item, getNeturitionValue }) => {
  const statuses = StaticData.fruits.find((e) => {
    return item.name === e.name;
  });
  return (
    <div className="card-container">
      <div className="card-rows">
        <div className="card-left-container">
          <div className="card-main">
            <img
              src={statuses && statuses.icon}
              className="logo"
              alt={statuses && statuses.image}
            />
            <div className="logo-contain">
              <div className="logo-title">{statuses && statuses.name}</div>
              <div className="logo-subtitle">
                {statuses && statuses.name === item.name ? item.genus : ""}
              </div>
            </div>
          </div>

          <div className="card-left-title">{statuses && statuses.slogan}</div>
          <div className="card-left-bottom">
            <div>
              <div className="title">Genus</div>
              <div className="subtitle">
                {statuses && statuses.name === item.name ? item.genus : ""}
              </div>
            </div>
            <div>
              <div className="title">Family</div>
              <div className="subtitle">
                {statuses && statuses.name === item.name ? item.family : ""}
              </div>
            </div>
            <div className="">
              <button
                className="button"
                onClick={() =>
                  statuses && statuses.name === item.name
                    ? getNeturitionValue(item)
                    : null
                }
              >
                Full Detail
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={statuses && statuses.image}
            className="left-container-image"
            alt={statuses && statuses.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
