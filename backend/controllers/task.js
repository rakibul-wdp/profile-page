import TaskModel from "../models/task.js";

export const createTask = async (req, res) => {
  const { imageURL, title, points } = req.body;
  if (!imageURL || !title || !points) {
    return res
      .status(400)
      .json({ error: "imageURL, title, and points are required" });
  }

  try {
    const task = await TaskModel.create({
      imageURL,
      title,
      points,
    });
    console.log(task);

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(401).json({
      success: false,
      message: "Error occurred while creating task",
    });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
    });
  }
};
