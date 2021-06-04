import React, { Component } from 'react';
//importing React 
import './Header.css';


// class -based component 
class Header extends Component {
  render() {
    const style = {
      //passing in width prop which is coming from App.js
      width: this.props.width,
      //prop from App.js 
      backgroundColor: this.props.backColor
    }
    return (
      //style is a prop, destructured referencing the style above 
      //className Header-main, just the class  
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
