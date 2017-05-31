import React from 'react';
import Letter from './Letter';

const Letters = (props) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let chars = characters.split('');

  chars = chars.map((character, i) => {
    return (
      <Letter
        key={i}
        alpha={character}
        gameStatus = {props.gameStatus}
        pickedArray={props.pickedArray}
        addAlphas={props.addAlphas} />
    );
  });

  return (
    <div className='letters'>
      <ul>
        {chars}
      </ul>
    </div>
  );
};

export default Letters;
