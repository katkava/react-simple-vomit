import React, { Component } from 'react';
import './Aside.css';
//importing our component by destructuring from React. 

class Aside extends Component {
  //class based syntax 
  render() {
    //place the stuff we want inside render method 
    return (
        <aside className="Aside">
        </aside>

    );
  }
}

//exporting the method to be used by App. 
export default Aside;
