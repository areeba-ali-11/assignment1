const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let idCounter = 1;

//Add a newv task
app.post("/addTask", (req,res)=> {
    const{ taskName} = req.body;
    if (!taskName) return res.status(400).json({error:"taskName is required"});
const newTask = { id: idCounter++, taskName};
tasks.push(newTask);
res.status(201).json(newTask);
});

//get all tasks
app.get("/tasks", (req, res)=> {
    res.json(tasks);
});

//delete a task by id
app.delete ("/task/:id", (req, res)=>{
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task=>task.id!==taskId);
    res.json({ message: 'Task with id ${taskId} deleted' });
});
app.listen(PORT, () =>{
console.log('server is running on http://localhost;${PORT}');
});


