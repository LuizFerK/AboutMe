import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './pages/AboutMe';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <AboutMe />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
