import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//running a test to make sure it's making, "it" is a new thing 
it('renders without crashing', () => {
  //creating our div if it's working and rendering the app 
  //using ReactDOM to render it in the browser, it's a package that provides DOM specific methods 
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
