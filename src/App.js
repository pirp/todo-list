import React, { Component, useState} from 'react';
import List from './TodoList'
import './App.css';

function App() { // const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const onChange = event => {
    setCurrentItem(event.target.value)
  }
  
  const onSubmit = event => {
    event.preventDefault();
    setItems([...items, currentItem]);
    setCurrentItem('');
  }

  return (
      <div className="App">
          <h1>This is our list</h1>
          <List items={items}/>
          <form className="App" onSubmit={onSubmit}>
             <input value={currentItem} onChange={onChange} />
             <button>Submit</button>
          </form>
      </div>
  )
}

export default App;