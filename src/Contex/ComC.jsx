import React, { useContext } from 'react'
import { Bio } from './ComA';

const ComC = () => {
    const {obj,changeValue} = useContext(Bio);
    
  return (
    <>
        <p>ComC</p>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.city}</p>

        <button className='border p-2' onClick={() => changeValue("name" , "Rahul Kumar")}>
            Click Me
        </button>
    </>
  )
}

export default ComC