import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Pages/action'

function Home() {

  const data=useSelector(store=>(store.data.data))
  const dispatch=useDispatch()

  console.log(data,'data')


  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <div>Home</div>
  )
}

export default Home