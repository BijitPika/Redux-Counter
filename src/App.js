import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { upValue, downValue, clearValue } from './Redux/Action';


function App() {
  const { value } = useSelector((select) => select.myReducer)
  // console.log(value);

  const dispatch = useDispatch()

  const decrementValue = () => {

    dispatch(downValue(value))
  }
  const incrementValue = () => {
    dispatch(upValue(value))
  }
  const resetValue = () => {
    dispatch(clearValue(value))
  }

  return (
    <>
      <div className="App">
        <h1>Redux Counter</h1>
        <div className='Counter'>
          <button onClick={decrementValue}>Decrement -1</button> <span>{value}</span> <button onClick={incrementValue}>Increment +1</button>
        </div>
        <button onClick={resetValue} className='btn'>Reset</button>
      </div>
    </>
  );
}

export default App;

