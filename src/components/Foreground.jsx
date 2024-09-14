import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = ({addTask,setAddTasks}) => {
    const ref =useRef(null)
    console.log(setAddTasks)
    
  return (
    <div ref={ref} className=' z-[3] absolute top-[100px] h-full w-full px-24 py-10 flex gap-5 flex-wrap'>
        {
          addTask.map((task,index)=> <Cards refference={ref} title={task.title} desc={task.desc} key={index} arr={addTask} setArr={setAddTasks} index={index}/>)
        }
    </div>
  )
}

export default Foreground