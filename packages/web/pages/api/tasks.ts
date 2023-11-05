import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('./data/tasks.json');

let Tasks: { title: string; status: boolean }[] = [];
try {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  Tasks = JSON.parse(data);
} catch (error) {
  console.error('Error reading data file:', error);
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ Tasks });
  } else if (req.method === 'PUT') {
    const { task } = JSON.parse(req.body);
    if (task) {
      Tasks.push(task);
      res.status(201).json({ message: 'Task added successfully' });
      saveData();
    } else {
      res.status(400).json({ error: 'Invalid request' });
    }
  } else if (req.method === 'DELETE') {
    const { index } = JSON.parse(req.body);
    if (index !== undefined && typeof index === 'number') {
      Tasks.splice(index, 1);
      res.status(200).json({ message: 'Task deleted successfully' });
      saveData();
    } else {
      res.status(400).json({ error: 'Invalid request' });
    }
  } else if (req.method === 'PATCH') {
    const { index } = JSON.parse(req.body);
    if (index !== undefined && typeof index === 'number') {
      Tasks = Tasks.map((task, taskIndex) => {
        if (taskIndex === index) {
          const updatedTask = {
            title: task.title,
            status: !task.status,
          };
          return updatedTask;
        } else {
          return task;
        }
      });
      saveData();
      res.status(200).json({ message: 'Task updated successfully' });
    } else {
      res.status(400).json({ error: 'Invalid request' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
  res.end();
};
function saveData() {
  try {
    const data = JSON.stringify(Tasks, null, 2);
    fs.writeFileSync(dataFilePath, data, 'utf-8');
  } catch (error) {
    console.error('Error writing data file:', error);
  }
}
