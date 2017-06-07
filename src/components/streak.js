import React from 'react';


const Output = (props) => {

  return (
    <div className='streak'>
      Streak: {props.streak}
    </div>
  );
};

export default Output;
