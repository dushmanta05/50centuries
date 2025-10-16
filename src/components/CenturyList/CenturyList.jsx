import React from "react";
import Masonry from 'react-masonry-css';

import centuryData from "../../data/centuryData";
import CenturyCard from "./CenturyCard";

const CenturyList = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {centuryData &&
        centuryData.map((data) => (
          <div key={data.id} style={{ marginBottom: "20px" }}>
            <CenturyCard data={data} />
          </div>
        ))}
    </Masonry>
  );
};

export default CenturyList;
