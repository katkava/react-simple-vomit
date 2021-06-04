import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// importing packages and setting up environment for react 


ReactDOM.render(<App />, document.getElementById('root'));
//this will run our App, our App is getting passed in into the root element 
registerServiceWorker();
