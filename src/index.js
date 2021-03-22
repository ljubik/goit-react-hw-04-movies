import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieFind from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieFind />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
