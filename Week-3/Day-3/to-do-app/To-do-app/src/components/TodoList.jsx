import React from 'react';
import TodoItem from './TodoItem.jsx';
import '../styles/todo-list.css';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
  
  if (todos.length === 0) {
    return (
      <div className="list-container">
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p className="empty-state-title">No tasks yet</p>
          <p className="empty-state-subtitle">Add your first task above! 👆</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-container">
    
      <h2 className="list-header">
        📋 Your Tasks ({todos.length})
      </h2>
      
    
      <div className="todo-items-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;