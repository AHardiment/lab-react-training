import React from 'react';

const encodeCreditCard = (number) => {
  let encodeNum = [];
  for (let i = 0; i < number.length; i++) {
    if (i < number.length - 4) {
      encodeNum.push('#');
    } else {
      encodeNum.push(number[i]);
    }
  }
  return encodeNum.join('');
};

const CreditCard = (props) => {
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="type">
        <h2>{props.type}</h2>
      </div>
      <div className="number">
        <h1>{encodeCreditCard(props.number)}</h1>
      </div>
      <div className="details">
        <h4>
          Expires {props.expirationMonth}/{props.expirationYear} - {props.bank}
        </h4>
        <h4>{props.owner}</h4>
      </div>
    </div>
  );
};

export default CreditCard;
