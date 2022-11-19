import React from 'react';

const checkLanguage = (lang) => {
  switch (lang) {
    case 'en':
      return 'Hello';
    case 'de':
      return 'Hallo';
    case 'es':
      return 'Hola';
    case 'fr':
      return 'Bonjour';
    default:
      return 'you';
  }
};

const Greetings = (props) => {
  return (
    <div className="greeting">
      <h1>
        {checkLanguage(props.lang)} {props.children}
      </h1>
    </div>
  );
};

export default Greetings;
