import React from 'react'
import { BiXCircle } from "react-icons/bi";

function Card({tasks,deleteTasks,updateTasks}) {
  return (
    <div className='flex gap-y-5 flex-col'>
      {
        tasks.map((item,index) => (
            <li onClick={() => updateTasks(item.id,!item.complete)} key={index} className={item.complete ? 'px-3 py-2 flex justify-between items-center bg-green-600 w-full rounded-md' : 'px-3 py-2 flex justify-between items-center bg-slate-600 w-full rounded-md'}  ><p className={item.complete ? 'line-through' : ' '} >{item.text}</p><BiXCircle onClick={() => deleteTasks(item.id)}/>
            </li>
        ))
      }
    </div>
  )
}

export default Card