import { useEffect, useState } from "react";

import FooterNav from "@/components/FooterNav";
import Spinner from "@/components/Spinner";
import TaskItem from "@/components/TaskItem";
import axios from "axios";

const TaskDetails = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://social-media-task-api-rakibul-wdp.vercel.app/api/task"
        );
        setTasks(response.data.data);
      } catch ({ error }) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading)
    return (
      <p className="flex h-screen justify-center items-center w-full">
        <Spinner />
      </p>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Task Details</h1>
          <div className="flex space-x-2">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              🏆 3982
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              ₹2875.00
            </span>
          </div>
        </div>

        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            icon={task.imageURL}
            title={task.title}
            points={task.points}
          />
        ))}
      </div>
      <FooterNav />
    </div>
  );
};

export default TaskDetails;
