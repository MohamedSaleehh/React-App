import React from 'react'

export default function Btn({counterChangher,title}){
  return (
    <button className='btn btn-danger' onClick={counterChangher}>{title}</button>
  )
}


