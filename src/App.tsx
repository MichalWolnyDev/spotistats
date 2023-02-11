import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Header from './components/header/Header'
import Welcome from './components/welcome/Welcome'
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
       
      </header> */}
    </div>
  );
}

export default App;
