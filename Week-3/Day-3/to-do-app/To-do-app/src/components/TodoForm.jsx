import React from 'react';
import { Calendar, AlertCircle, Clock, Plus } from 'lucide-react';
import { getTodayDate } from '../utils/helpers.js';
import '../styles/todo-form.css';

const TodoForm = ({ 
  inputValue, 
  setInputValue, 
  dueDate,
  setDueDate,
  editId, 
  errorMessage, 
  onSubmit, 
  onCancelEdit 
}) => {
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        
        {errorMessage && (
          <div className="error-message-box">
            <AlertCircle size={20} />
            <span className="error-text">{errorMessage}</span>
          </div>
        )}
        
        {editId !== null && (
          <div className="edit-mode-banner">
            <span className="edit-mode-text">✏️ Edit Mode: Updating your task</span>
            <button onClick={onCancelEdit} className="cancel-edit-btn">
              Cancel
            </button>
          </div>
        )}
        
        <div className="input-fields-wrapper">

          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              // onKeyPress={handleKeyPress}
              placeholder="What do you need to do?"
              className="task-input-field"
            />
          </div>
          
   
          <div className="action-row">
            
            <div className="date-picker-wrapper">
              <Calendar className="date-icon" size={20} />
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                min={getTodayDate()}
                className="date-input-field"
              />
            </div>
            
    
            <button onClick={onSubmit} className="submit-btn">
              <Plus size={20} />
              {editId !== null ? 'Update' : 'Add Task'}
            </button>
          </div>
        </div>
  
        <p className="helper-text">
          <Clock size={14} />
          Due date is optional - leave blank if not needed
        </p>
      </div>
    </div>
  );
};

export default TodoForm;