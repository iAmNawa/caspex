import React, { Component } from 'react';
import './List.css';

class Welcome extends Component {
  returnAllImages = () => {
    return this.props.listOfImages.map((item, index) => {
      return <div className="picture-border" key={index}>
                <div>{item[1]}</div>
                <img className="added-image" src={item[0]} />
              </div>
    })
  }
  render() {
    return (
      <div>{this.returnAllImages()}</div>
    );
  }
}

export default Welcome;
