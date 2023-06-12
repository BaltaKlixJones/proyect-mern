import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, [params.id]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
       updateTask(params.id, data);
    } else {
      createTask(data);
    }
      navigate("/tasks")
  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md ">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
