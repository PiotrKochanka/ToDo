import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem('todo');
    return savedTodo ? JSON.parse(savedTodo) : [
    'todo1',
    'todo2',
    'todo3',
  ]});
  const [done, setDone] = useState(() => {
    const savedDone = localStorage.getItem('done');
    return savedDone ? JSON.parse(savedDone) : [
    'done1',
    'done2',
    'done3',
  ]});

  const addElement = (el) => {
    setTodo((prev) => {
      const newTodo = [...prev, el];
      localStorage.setItem('todo', JSON.stringify(newTodo));
      return newTodo;
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
              onClick={() => {
                setDone((prev) => {
                  const backDone = [...prev, item];
                  localStorage.setItem('done', JSON.stringify(backDone));
                  return backDone;
                });
                setTodo((prev) => {
                  const deleteTodo = prev.filter((e) => e !== item);
                  localStorage.setItem('todo', JSON.stringify(deleteTodo));
                  return deleteTodo;
                });
              }}
            />
            <input 
              type="button"
              value="Usuń"
              onClick={() => {
                setTodo((prev) => {
                  const deleteTodo = prev.filter((e) => e !== item)
                  localStorage.setItem('todo', JSON.stringify(deleteTodo));
                  return deleteTodo;
                });
              }}
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
              value="Przywróć"
              onClick={() => {
                setTodo((prev) => {
                  const backTodo = [...prev, item];
                  localStorage.setItem('todo', JSON.stringify(backTodo));
                  return backTodo;
                });
                setDone((prev) => {
                  const deleteDone = prev.filter((e) => e !== item);
                  localStorage.setItem('done', JSON.stringify(deleteDone));
                  return deleteDone;
                });
              }}
            />
            <input 
              type="button"
              value="Usuń"
              onClick={() => {
                setDone((prev) => {
                  const deleteDone = prev.filter((e) => e !== item);
                  localStorage.setItem('done', JSON.stringify(deleteDone));
                  return deleteDone;
                });
              }}
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
