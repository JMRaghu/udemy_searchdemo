import React from 'react';
import ReactDom from 'react-dom'
import SearchContainer from './searchcontainers';

import style from './App.css';

function App() {
  return (
    <div className = {style.wrapper}>
    <SearchContainer/>
    </div>
  );
}

export default App;
