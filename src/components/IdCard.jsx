import React from 'react';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <div>
        <img src={props.image} alt={props.firstName} />
      </div>
      <div>
        <h3>First name: {props.firstName}</h3>
        <h3>Last name: {props.lastName}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>Height: {props.height}</h3>
        <h3>Birthday: {props.birth}</h3>
      </div>
    </div>
  );
};

export default IdCard;
