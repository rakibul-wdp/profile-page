/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const TaskItem = ({ icon, title, points }) => (
  <Card className="mb-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
    <CardContent className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <img src={icon} alt={title} className="w-10 h-10 rounded-full" />{" "}
        <span className="font-semibold">{title}</span>
      </div>
      <Button
        variant="secondary"
        className="bg-white text-pink-500 hover:bg-gray-100"
      >
        {points} Points
      </Button>
    </CardContent>
  </Card>
);

export default TaskItem;
