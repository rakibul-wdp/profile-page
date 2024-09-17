import { FaInstagram } from "react-icons/fa";

const TaskCard = ({ title, points }) => {
  return (
    <div className="flex items-center justify-between bg-red-500 text-white p-4 my-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 lg:max-w-full lg:flex-row lg:justify-start lg:space-x-4">
      <div className="bg-white p-3 rounded-full">
        <FaInstagram className="text-red-500" size={24} />
      </div>
      <div className="ml-4 flex-grow lg:flex-grow-0 lg:w-2/3">
        <h4 className="font-semibold text-md lg:text-base">{title}</h4>
      </div>
      <span className="bg-yellow-400 text-white py-1 px-3 rounded-full font-bold lg:px-6">
        {points} Points
      </span>
    </div>
  );
};

export default TaskCard;
