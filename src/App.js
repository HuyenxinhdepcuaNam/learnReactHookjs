import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import CountDown from './views/Countdown';
import CountdownHook from './views/CountdownHook';

const App = () => {
  let [name, setName] = useState('Banh Thi Huyen')
  let [address, setAddress] = useState('')
  let [todos, setTodos] = useState([
    { id: 'todo 1', title: 'hello banh thi huyen', type: 'eric' },
    { id: 'todo 2', title: 'hi banh thi huyen', type: 'nam' },

  ])

  useEffect(() => {
  }, [])

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

  const handleDeleteTodo = (id) => {
    let currentTodos = todos
    currentTodos = todos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }
  const onTimeup = () => {
    // alert('Time out!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Hello world with {name}</h5>
        <CountDown onTimeup={onTimeup} />
        <span>-------------------------------</span>
        <CountdownHook onTimeup={onTimeup} />
        {/* <Todo
          todos={todos}
          title={'All todos'}
          handleDeleteTodo={handleDeleteTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'eric')}
          title={`Eric's todos`}
          handleDeleteTodo={handleDeleteTodo}

        />
        <input type='text' value={address}
          onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventClick()}>Click here</button> */}

        {/* <Covid /> */}

      </header>
    </div>
  );
}

export default App;
