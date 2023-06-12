import React, { useEffect } from "react";
import { useTask } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
const TasksPage = () => {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <div>No hay tareas</div>;

  return (
    <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>
      ))}
    </div>
  );
};

export default TasksPage;
