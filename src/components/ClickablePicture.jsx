import React, { useState } from 'react';

const ClickablePicture = (props) => {
  const [image, setImage] = useState(props.img);

  const changeImage = () => {
    if (image === props.img) {
      setImage(props.imgClicked);
    } else {
      setImage(props.img);
    }
  };

  return (
    <div className="click-image">
      <img src={image} alt="Man" onClick={changeImage} />
    </div>
  );
};

export default ClickablePicture;
