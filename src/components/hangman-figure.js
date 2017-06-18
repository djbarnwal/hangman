import React, {Component} from 'react';

//Import all images
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

let imgArray = [];

class Hangman extends Component {

  componentWillMount() {
    for(let i=0; i<=6; i++) {
      imgArray.push( <img key={i} alt='' src={images[`${i}.png`]} /> );
    }
  }

  showHangman() {
    let output = imgArray.slice(0, this.props.incorrectPicks+1);
    return output;
  }

  render() {
    return (
      <div className='hangman'>
        {this.showHangman()}
      </div>
    );
  }
}

export default Hangman;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}
