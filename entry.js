/* Import render function */
import { render } from 'react-dom';

/* Import React library */
import React from 'react';

/* Import App.js from the same directory */
import App from './App';

/* Get html element that going to be rendered */
const containerEl = document.getElementById('reactjs-tutorial-todo-rootEle');

/* Render App.js to specific html element */
render(
  <App/>,
  containerEl
);
