import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/blueprint.css';
import './assets/github-markdown.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
