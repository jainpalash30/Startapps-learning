import React, { useState } from 'react';
import TodoStats from './components/TodoStats.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [dueDate, setDueDate] = useState('');

  const [editId, setEditId] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  
  const trimmedInput = inputValue.trim();

  const isDuplicate = (text) => {
    return todos.some(todo => 
      todo.text.toLowerCase() === text.toLowerCase() && todo.id !== editId
    );
  };


  const showError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(''), 3000);
  };

  const handleSubmit = () => {
    if (!trimmedInput) {
      showError(' Task cannot be empty. Please type something!');
      return;
    }

    if (trimmedInput.length < 3) {
      showError('Task must be at least 3 characters long!');
      return;
    }

     if (isDuplicate(trimmedInput)) {
      showError(' This task already exists! Please write something new.');
      return;
    }


     if (editId !== null) {
      setTodos(todos.map(todo =>
        todo.id === editId 
          ? { ...todo, text: trimmedInput, dueDate: dueDate || null }
          : todo
      ));
      setEditId(null);
    }

     else {
      const newTodo = {
        id: Date.now(), 
        text: trimmedInput,
        completed: false,
        dueDate: dueDate || null,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
    }

     setInputValue('');
    setDueDate('');
    setErrorMessage('');
  };

   const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (editId === id) {
      setEditId(null);
      setInputValue('');
      setDueDate('');
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setInputValue(todo.text);
    setDueDate(todo.dueDate || '');
    setErrorMessage('');
  };
  
  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  
  
  const handleCancelEdit = () => {
    setEditId(null);
    setInputValue('');
    setDueDate('');
    setErrorMessage('');
  };


  return (
    <div className="app-container">
      <div className="app-content-wrapper">
        
       
        <div className="app-header">
          <h1 className="app-title">
            Smart To-Do List
          </h1>
          <p className="app-subtitle">
            Manage your tasks with dates and priorities!
          </p>
        </div>
        
      
        <TodoStats todos={todos} />
        
        
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          dueDate={dueDate}
          setDueDate={setDueDate}
          editId={editId}
          errorMessage={errorMessage}
          onSubmit={handleSubmit}
          onCancelEdit={handleCancelEdit}
        />
        
       
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
      
        <div className="app-footer">
          <p className="footer-title">💡 <strong>Pro Tips:</strong></p>
          <div className="footer-tips">
        
            <p>• Due date is optional</p>
            <p>• Tasks must be at least 3 characters</p>
            <p>• Press Enter to quickly add tasks</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default App;



