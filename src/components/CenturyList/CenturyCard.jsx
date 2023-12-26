import React from "react";

const CenturyCard = ({ data }) => {
  return (
    <div>
      <div className="img-div">
        <img src={data.img} />
      </div>

      <p>
        <strong>#{data.id} - </strong>
        {data.text}
      </p>
    </div>
  );
};

export default CenturyCard;
