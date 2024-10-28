
import React, { useState } from 'react';

export default function Counter() {

  const [value,setValue]= useState(0);
  let prev = value;
  console.log(value)
  
  
    
  return (
    <div>
      <div className='container'>
      <div className='counter'>
      <div>
        <p id='valueN' className='count-value'>{value}</p>
        <button onClick={()=>{
          setValue(prev= prev+1)
        }}  id='incId'>Inc</button>

        <button onClick={()=>{
          setValue(prev=0)
        }}  id='resetId'>Reset</button>

        <button onClick={()=>{
          setValue(prev= prev-1)
        }}  id='decId'>Dec</button>
      </div>

      </div>

      </div>
    </div>
  )
}
