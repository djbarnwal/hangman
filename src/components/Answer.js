import React from 'react';

const Answer = (props) => {
  let answer = props.answer.toUpperCase();
  let underscore = answer.replace(/[A-Z]/g, "_");

  let pick = props.pickedArray;
  if(pick.length > 0) {

    let guess = pick.join('');
    let regexp = new RegExp('[^' + guess + ']','g');
    underscore = answer.replace(regexp, '_');
  }

  return (
    <div className='answer-box'>
      {underscore}
    </div>
  );
};

export default Answer;
