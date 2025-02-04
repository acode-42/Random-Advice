import {useEffect, useState}from 'react'
import React from 'react'
import axios from 'axios'


const App = () => {
  const[advice, setAdvice]=useState("")

  const fetch= async()=>{
    try{
      const res=await axios.get("https://api.adviceslip.com/advice")
      setAdvice(res.data.slip.advice)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{{fetch()}},[])
  return (
    
    <div className="app bg-[url('https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg')] bg-cover bg-center bg-no-repeat min-h-screen justify-center items-center border shadow-xl flex height-100vh">
      <div className="card bg-opacity-50  w-130 h-100 overflow-auto justify-center items-center gap-3 p-3 flex flex-col bg-green-200/60 rounded-lg mx-auto p-20 text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
        <h1 className="heading text-xl font-bold border-l-1 p-3  shadow-xl hover:scale-120 duration-300 ease-in italic">"{advice}"</h1>
        <button className='border-b-2 rounded-lg p-1 hover:bg-green-300/30  hover:font-bold ease-in hover:scale-100 duration-200 ease-in shadow-md' onClick={fetch}><span>Click here to get an advice</span></button>
      </div>
    </div>
  )
}

export default App