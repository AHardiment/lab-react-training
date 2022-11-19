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

const Rating = (props) => {
  return (
    <div className="rating">
      <h1>{displayRatingStars(props.children)}</h1>
    </div>
  );
};

export default Rating;
