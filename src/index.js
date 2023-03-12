import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Routes';
import './Style/index.css'
import './Style/responsive.css'
import Data from './API/data';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Data>
      <Main/>
    </Data>
  </React.StrictMode>
);
