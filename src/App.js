import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {
  let [name, setName] = useState('Banh Thi Huyen')
  let [address, setAddress] = useState('')
  let [todos, setTodos] = useState([
    { id: 'todo 1', title: 'hello banh thi huyen', type: 'eric' },
    { id: 'todo 2', title: 'hi banh thi huyen', type: 'nam' },

  ])

  const handleEventClick = () => {
    if (!address) {
      return alert('Missing input!')
    }
    let newTodo = { id: Math.floor(Math.random() * 10), title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Hello world with {name}</h5>
        <Todo
          todos={todos}
          title={'All todos'}
        />

        <Todo
          todos={todos.filter(item => item.type === 'eric')}
          title={`Eric's todos`}
        />
        <input type='text' value={address}
          onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventClick()}>Click here</button>
      </header>
    </div>
  );
}

export default App;
