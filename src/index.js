import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, he/she can still see results on the screen, as such it helps to  build a better user experience. All about adding offline capabilities. 

// importing packages and setting up environment for react 


ReactDOM.render(<App />, document.getElementById('root'));
//this will run our App, our App is getting passed in into the root element 
registerServiceWorker();
