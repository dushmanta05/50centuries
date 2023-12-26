import React from "react";
import "./style.css";

import centuryData from "../../data/centuryData";
import CenturyCard from "./CenturyCard";

const CenturyList = () => {
  return (
    <div className="century-list">
      {centuryData &&
        centuryData.map((data) => (
          <div key={data.id}>
            <CenturyCard data={data} />
          </div>
        ))}
    </div>
  );
};

export default CenturyList;
