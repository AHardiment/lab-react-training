import React from 'react';

const displayRatingStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating)) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  return stars.join('');
};

const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h1>{props.name}</h1>
        <h1>{displayRatingStars(props.rating)}</h1>
        <h4>
          {props.car.model} - {props.car.licensePlate}
        </h4>
      </div>
    </div>
  );
};

export default DriverCard;
