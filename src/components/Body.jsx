import React from 'react'
import Login from './Login'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/counterSlice'

const Body = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='text-red-400'>
      {/* <Login /> */}
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      
    </div>
  )
}

export default Body
