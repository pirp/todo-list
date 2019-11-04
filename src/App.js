import React, { Component } from 'react';
import List from './TodoList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: ''
    }
  }
  onChange = (event) => {
    this.setState({currentItem: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      currentItem: '',
      items: [...this.state.items, this.state.currentItem]
    });
  }
  

  render(){
    return (
    <div className="App">
    <h1>This is our list</h1>
    <List items={this.state.items}/>
    <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.currentItem} onChange={this.onChange} />
       <button>Submit</button>
   </form>
    </div>
  );}
  
}

export default App;
