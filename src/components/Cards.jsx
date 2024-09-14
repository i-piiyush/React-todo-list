import React from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
const Cards = ({ refference,title,desc,index,arr,setArr }) => {

  const [btn,setBtn]= useState(false);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const dltTask = (arr,index)=>{
  const updatedArr = arr.filter((elem,i)=> i !== index)
setArr(updatedArr);
console.log(updatedArr);

}
  return (
    <motion.div
      drag
      dragConstraints={refference}
      className="h-[330px] w-[280px] rounded-[30px] bg-zinc-700/80 overflow-hidden px-10 py-5 relative"
    >
      <div className=" w-full h-[20%] flex justify-between items-center ">
        <h1 className="text-zinc-200 font-semibold text-lg">
          {capitalizeFirstLetter(title)}
        </h1>
        <MdDelete size="1.15em" color="white" className="icon" onClick={()=> dltTask(arr,index)}/>
      </div>
      <h1 className="text-zinc-200/40  text-sm">
        {desc}
      </h1>
      <button className={`absolute ${btn==false?`bg-green-600`:`bg-red-700`} w-full bottom-0 left-0 py-5 text-zinc-200` } onClick={()=>{
        setBtn(!btn)
      }}>
        {btn==false?"Task completed":"Task not completed"}
      </button>
    </motion.div>
  );
};

export default Cards;
