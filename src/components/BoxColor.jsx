import React from 'react';

const BoxColor = (props) => {
  return (
    <div
      className="box-colour"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
    </div>
  );
};

export default BoxColor;
