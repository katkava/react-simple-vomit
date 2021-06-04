//App.js is our global component, everything needs to go inside of it 
import React, { Component } from 'react';
// {Component} -> destructuring stuff 
import './App.css';
//components that we need to import, not vomit way would be to create a new folder and putting these 4 things below into a components folder below. 
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';

// class-based way of writing component, creating another component 
class App extends Component {
// rendering stuff 
  render() {
    return (
      //we're passing in header, sectionMain, aside and footer components into App. 
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        {/* passing in props , in react we say className, camelCase means we're using JSX */}
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
// exporting our App to call it in another place 
