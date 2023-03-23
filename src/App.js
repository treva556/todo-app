import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
//import React, { useState } from 'react';

function App() {
  //const [todos, setTodos] = useState([]);

  //const [newTodo, setNewTodo] = useState('');
  return (
    <div className="App">
      <TodoWrapper  />
    </div>
  );
}

export default App;