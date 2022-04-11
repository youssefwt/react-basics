// import logo from './logo.svg';
import './App.css';
import Dayone from './day1/Dayone';
import {useState} from 'react';

function App() {

const [value,setValue]=useState(10)

const increase= ()=>{
  setValue(value + 1);
}

const decrease= ()=>{
  setValue(value - 1);
}

  return (
    <div className='container'>
      <Dayone mynum={value}/>
      <div className="buttons-div">
          <button className="button" onClick={increase}>increase</button>
          <button className="button" onClick={decrease}>decrease</button>
      </div>
      <h4 className='warning'>{value < 0 ? 'WARNING, you are now below zero':'' }</h4>
    </div>
  );
}

export default App;
