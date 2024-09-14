import "./App.css";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

import Navbar from "./components/Navbar";
import { useState } from "react";
import Newtask from "./components/Newtask";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [addTask,setAddTask] = useState([{title:"Grocery Shopping", desc:"Buy groceries for the week including fruits, vegetables, dairy, and snacks.(This is a dummy task)"}]);


  const openOverlay = () => {
    setOverlay(true);
    console.log("Open overlay");
  };
  const closeOverlay = () => {
    setOverlay(false);
    console.log("Close overlay");
  }

return (
  <div className="bg-zinc-800 h-screen w-full relative overflow-hidden">
    <div className="w-full h-full relative">
    {overlay && <Newtask closeOverlay={closeOverlay} addTask={addTask} setAddTasks={setAddTask} />}
      <Navbar openOverlay={openOverlay} setAddTasks={setAddTask} />
      
      <Background />
      <Foreground addTask={addTask} setAddTasks={setAddTask} />
    </div>
  </div>
);
}
export default App;
