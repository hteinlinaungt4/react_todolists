import React, { useEffect, useState } from 'react'
import List from './components/List'
import Form from './components/Form'
import api from './api/api'
import uuid from 'react-uuid';

function App() {
  const [tasks,setTasks] = useState([]);
  const fetchdata = async () => {
    const res = await api.get("/todolists")
    setTasks(res.data)
  }
  useEffect(() => {
    fetchdata();
  },[])
  const formhandle = async (value) => {
    const newTasks = {
      id: uuid(),
      text : value,
      complete : false
    }
    const res=await api.post('/todolists',newTasks)
    setTasks([...tasks,res.data]);
  }
  const deleteTasks =async (id) =>{
    const res=await api.delete(`/todolists/${id}`)
    if(res.statusText === "OK"){
     setTasks(tasks.filter(tasks => tasks.id !==id))
    }
  }
  const updateTasks = async (id,complete) => {
   const res = await api.patch(`/todolists/${id}`,{
    complete
   });
   if(res.statusText === "OK"){
    setTasks(  tasks.map(item => {
      if(item.id === id){
        return {
          id : item.id,
          text : item.text,
          complete : !item.complete
        }
      }
      return item
   }))
   }
  }
  return (
    <div className='flex flex-col gap-y-10 justify-center items-center h-screen  bg-slate-800'>
      <h1 className='text-slate-100 text-3xl'>To Do Lists</h1>
      <Form  formhandle={formhandle}></Form>
      <List tasks={tasks} deleteTasks={deleteTasks} updateTasks={updateTasks}></List>
    </div>
  )
}

export default App