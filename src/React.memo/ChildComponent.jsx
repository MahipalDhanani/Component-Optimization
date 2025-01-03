import React from 'react'

export const ChildComponent=React.memo(()=> {
    console.log(Math.random())
  return (
    <div>ChildComponent : {Math.floor(Math.random()*1000)}</div>
  )
})
// export default ChildComponent;