import React, { useState } from 'react'

function Form({formhandle}) {
  const [value,setValue]=useState("");
  const getData= e => {
    e.preventDefault();
    if(value !== " "){
      formhandle(value);
    }
    setValue(" ");
  }
  return (
    <div className='md:w-1/3 w-full'>
      <form  onSubmit={getData} className='flex justify-between gap-x-4'>
        <input value={value} onChange={e => setValue(e.target.value)}  className='md:w-2/3 w-2/3 px-3 py-1 outline-none bg-slate-500 text-slate-200 rounded-md' ></input>
        <button className='md:w-1/3 w-1/3 bg-red-400 rounded-md text-slate-200'>Add Tasks</button>
      </form>
    </div>
  )
}

export default Form