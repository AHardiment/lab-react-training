import React from 'react';
import { useState } from 'react';

const colours = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [colour, setColour] = useState(colours[0]);

  const like = () => {
    setLikes(likes + 1);
  };

  const changeColour = () => {
    for (let i = 0; i < colours.length; i++) {
      if (colour === colours[i]) {
        if (i === colours.length - 1) {
          setColour(colours[0]);
        } else {
          setColour(colours[i + 1]);
        }
      }
    }
  };

  const addLikesAndChangeColour = () => {
    like();
    changeColour();
  };

  return (
    <div>
      <button
        className="counter-button"
        style={{ backgroundColor: `${colour}`, color: 'white' }}
        onClick={addLikesAndChangeColour}
      >
        👍 {likes === 0 || likes > 1 ? `${likes} likes` : `${likes} like`}
      </button>
    </div>
  );
};

export default LikeButton;
