import React, { useReducer } from 'react'
import './UseState.css'

const UseReucer = () => {
    const initialValue = 0;
    const reducer = (state, action) =>{
        if(action.type === "Increment"){
            return state + 1;
        }else if (action.type === "Decrement"){
            return state - 1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue)
  return (
<div className='section-center'>
    <div className='couter-box'>
      <h2 className='counter'>{state}</h2>
      <div className='btn-container'>
        <button className='increment btn' onClick={() => dispatch({type : "Increment"})}>Increment</button>
        {
          state > 0 ?  <button className='decrement btn' onClick={() => dispatch({type : "Decrement"})}>Decrement</button> :
          <button disabled className='decrement btn'>Decrement</button> 
        }
      </div>
    </div>
  </div>
  )
}

export default UseReucer