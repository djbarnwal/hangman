import React from 'react';

const Letter = (props) => {
  if ( props.pickedArray.indexOf(props.alpha) > -1 || props.gameStatus > 0 ) {
    return (
      <li className='picked'>
        {props.alpha}
      </li>
    );
  }
  return (
    <li onClick={() => props.addAlphas(props.alpha)}>
      {props.alpha}
    </li>
  );
};

export default Letter;
