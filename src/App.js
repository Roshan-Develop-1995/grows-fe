import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';

const App = () => {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home />
      </main>
    </div>
  )
}

export default App