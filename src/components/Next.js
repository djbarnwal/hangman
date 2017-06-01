import React from 'react';

const Next = (props) => {
  if(props.gameStatus > 0 && props.answerList.length) {
    return (
      <div onClick={() => props.nextWord()} className='nextButton'>
        Next
      </div>
    );
  }
  return <div />;
}

export default Next;
