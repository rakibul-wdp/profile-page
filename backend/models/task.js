import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  imageURL: {
    type: String,
  },
  title: {
    type: String,
  },
  points: {
    type: Number,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;
