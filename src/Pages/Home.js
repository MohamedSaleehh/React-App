import React, { useState } from 'react'
import Btn from '../components/Btn'


function Home(){
    const [count,setCount] = useState(0)
    const incrementNum = () => 
        { 
        setCount(count + 1)
       }
    const decrementNum = () => { 
      if(count > 0){
    setCount(count - 1)
    }
   }

  return (
    <>
        <div className='container'>
      <h1>
        {count}
      </h1>
      <Btn counterChangher={incrementNum} title="increment"/>
      <Btn counterChangher={decrementNum} title="decrement" />
      </div>
      </>
  )
}

export default Home