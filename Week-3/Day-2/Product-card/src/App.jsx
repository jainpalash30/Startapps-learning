import React from 'react';
import ProductList from './components/ProductList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1> Product Showcase</h1>
        
      </header>
      
      <ProductList />
    </div>
  );
}

export default App;