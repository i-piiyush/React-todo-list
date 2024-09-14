import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
const Newtask = ({ closeOverlay, addTask, setAddTasks }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setAddTasks([...addTask, data]);

    reset();
  };
  return (
    <div className="h-[100vh] w-full overflow-hidden bg-zinc-900/70 absolute z-[4] flex items-center justify-center ">
      <div className="bg-zinc-300 h-[70%] w-[60vw] rounded-md overflow-hidden px-10 py-5">
        <div
          className=" flex justify-end cursor-pointer"
          onClick={closeOverlay}
        >
          <RxCross2 size="1.5em" />
        </div>
        <h1 className="text-4xl text-center font-bold text-zinc-600 mb-10">
          Add New Task
        </h1>
        <form className="w-full  h-[80%]" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-semibold text-3xl text-zinc-600 ">
            Enter your task title:
          </h1>
          <input
            type="text"
            placeholder="Enter your title"
            className="px-5 py-3 mt-5 w-[400px] rounded"
            {...register("title")}
            required
          />

          <h1 className="font-semibold text-3xl text-zinc-600 mt-10  ">
            Enter your task description:
          </h1>
          <textarea
            placeholder="Enter your task desciption"
            className="px-5 py-3  w-[400px] rounded mt-3 h-[200px]"
            {...register("desc")}
            required
          ></textarea>
          <br />
          <button
            type="submit"
            className="px-10 py-3 bg-green-600 text-zinc-200 rounded mt-2"
          >
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newtask;
