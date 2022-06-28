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
         <h1 className='mt-5 mb-5 container d-flex justify-content-center'>
        {count}
      </h1>
        <div className='container d-flex justify-content-center'>
 
      <Btn counterChangher={incrementNum} title="increment"/>
      <Btn counterChangher={decrementNum} title="decrement" />
      </div>
      </>
  )
}

export default Home