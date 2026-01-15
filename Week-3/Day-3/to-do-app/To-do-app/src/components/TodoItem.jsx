import React from 'react';
import { Calendar, CheckCircle, Circle, Edit2, Trash2 } from 'lucide-react';
import { formatDate, isOverdue } from '../utils/helpers.js';
import '../styles/todo-item.css';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const overdueStatus = isOverdue(todo.dueDate, todo.completed);
  
  const getItemClass = () => {
    if (todo.completed) return 'todo-item-wrapper todo-item-completed';
    if (overdueStatus) return 'todo-item-wrapper todo-item-overdue';
    return 'todo-item-wrapper todo-item-normal';
  };
  
  return (
    <div className={getItemClass()}>
      
      <button onClick={() => onToggle(todo.id)} className="toggle-btn">
        {todo.completed ? (
          <CheckCircle className="icon-completed" size={24} />
        ) : (
          <Circle className="icon-pending" size={24} />
        )}
      </button>
      
      <div className="todo-content-wrapper">
        <p className={todo.completed ? 'todo-text todo-text-completed' : 'todo-text'}>
          {todo.text}
        </p>
        
        <div className="metadata-row">
          {todo.dueDate && (
            <span className={`date-badge ${
              todo.completed ? 'date-badge-completed' : 
              overdueStatus ? 'date-badge-overdue' : 
              'date-badge-normal'
            }`}>
              <Calendar size={12} />
              {formatDate(todo.dueDate)}
              {overdueStatus && ' • Overdue!'}
            </span>
          )}
          
       
          <span className="created-date-text">
            Added: {formatDate(todo.createdAt)}
          </span>
        </div>
      </div>
    
      <div className="action-buttons-group">

        <button
          onClick={() => onEdit(todo)}
          disabled={todo.completed}
          className={todo.completed ? 'action-btn action-btn-disabled' : 'action-btn action-btn-edit'}
          title={todo.completed ? 'Cannot edit completed tasks' : 'Edit task'}
        >
          <Edit2 size={18} />
        </button>
        

        <button
          onClick={() => onDelete(todo.id)}
          className="action-btn action-btn-delete"
          title="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

