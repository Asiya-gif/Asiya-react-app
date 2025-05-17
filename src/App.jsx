import React from 'react';
import './App.css';
import Greeting from './components/Greeting.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Greeting name="Asiya"surname="Mohamed" />
      <Header />
    </>
  );
}

export default App;
