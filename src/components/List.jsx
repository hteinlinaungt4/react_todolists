import React from 'react'
import Card from './Card'

function List({tasks,deleteTasks,updateTasks}) {
  return (
    <ul className='md:w-1/3 w-full text-slate-200 gap-y-4 flex flex-col'>
      <Card tasks={tasks} deleteTasks={deleteTasks} updateTasks={updateTasks}></Card>

    </ul>
  )
}

export default List