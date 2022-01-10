import React from 'react';
import './App.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';
import Header from './components/Header';
function App() {
  return (
    <>
     <Header />
     <Todos />
     <DisplayTodos />
    </>
  );
}

export default App;
