import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('Banh Thi Huyen')
  let [address, setAddress] = useState('')
  const handleEventClick = () => {
    setName(address)
  }
  const handleOnChangeInput = (event) => {
    console.log('check', event.target.value)
    setAddress(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Hello world with {name}</h4>
        <input type='text' value={address}
          onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventClick()}>Click here</button>
      </header>
    </div>
  );
}

export default App;
