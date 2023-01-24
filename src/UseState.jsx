import React, { useState } from 'react'
import './UseState.css'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='section-center'>
    <div className='couter-box'>
      <h2 className='counter'>{count}</h2>
      <div className='btn-container'>
        <button className='increment btn' onClick={() => setCount(count + 1)}>Increment</button>
        {
          count > 0 ?  <button className='decrement btn' onClick={() => setCount(count - 1)}>Decrement</button> :
          <button disabled className='decrement btn' onClick={() => setCount(count - 1)}>Decrement</button> 
        }
      </div>
    </div>
  </div>
  )
}

export default UseState