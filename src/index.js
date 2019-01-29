import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Counter from './Counter';
// import ProgressBar from './Progress-Bar'
import * as serviceWorker from './serviceWorker';
// import App from './App';
import ProgressBarExample from './Bar';

ReactDOM.render( <ProgressBarExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
