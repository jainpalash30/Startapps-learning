import React from 'react';
import { isOverdue } from '../utils/helpers.js';
import '../styles/todo-stats.css';

const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = todos.filter(t => !t.completed).length;
  const overdue = todos.filter(t => isOverdue(t.dueDate, t.completed)).length;

  return (
    <div className="stats-container">
      <div className="stats-grid">
        <div className="stat-card stat-card-total">
          <p className="stat-number">{total}</p>
          <p className="stat-label">Total Tasks</p>
        </div>
        
        <div className="stat-card stat-card-completed">
          <p className="stat-number">{completed}</p>
          <p className="stat-label">Completed</p>
        </div>
        
        <div className="stat-card stat-card-pending">
          <p className="stat-number">{pending}</p>
          <p className="stat-label">Pending</p>
        </div>

        <div className="stat-card stat-card-overdue">
          <p className="stat-number">{overdue}</p>
          <p className="stat-label">Overdue</p>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;