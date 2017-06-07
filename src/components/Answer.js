import React from 'react';

const Answer = (props) => {
  let answer = props.answer.word;
  const hint = props.answer.hint;
  let pick = props.pickedArray;
  
  let guess = pick.join('');
  let regexp = new RegExp('[^' + guess + ']','g');
  let underscore = answer.replace(regexp, '_');


  return (
    <div>
      <div className='answer-box'>
        {underscore}
      </div>
      <div className='hint'>
        {hint}
      </div>
  </div>
  );
};

export default Answer;
