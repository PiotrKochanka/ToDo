import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
    'todo1',
    'todo2',
    'todo3',
  ]);
  const [done, setDone] = useState([
    'done1',
    'done2',
    'done3',
  ]);

  const addElement = (el) => {
    setTodo((prev) => {
      const newValue = [...prev, el];
      return newValue;
    });
  };

  return (
    <div className="App">
      <div>
        <h2>Do zrobienia</h2>
        {todo.map((item, index) => (
          <div key={index}>
            <strong>{item}</strong>
            <input 
              type="button" 
              value="Zrobione"
            />
            <input 
              type="button"
              value="Usuń"
            />
          </div>
        ))}
      </div>
      <div>
        <h2>Zakończone</h2>
        {done.map((item, index) => (
          <div key={index}>
            <strong>{item}</strong>
            <input 
              type="button" 
              value="Zrobione"
            />
            <input 
              type="button"
              value="Usuń"
            />
          </div>
        ))}
      </div>
      <div><br /><br />
        <input 
          type="text"
          placeholder="Wpisz nazwę"
        />
        <button
          onClick = {(e) => {
            const newValue = e.target.previousElementSibling.value;
            addElement(newValue);
          }}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}

export default App;
