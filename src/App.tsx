import {useState} from "react";
function App(){
  const [task, setTask] = useState<string>("");

  type Task ={
    text: string;
    completed: boolean;
  }
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAdd(){
    setTasks([...tasks,
       {text: task, completed: false}]);
    setTask("");
  }

  function handleDelete(index: number){
    setTasks(tasks.filter((_,i) => i !== index));
  }

  function handleComplete(index:number){
    setTasks(
      tasks.map((task,i) => i ===index ? {...task,completed: !task.completed}:task)
    );
  }
  return (
    <div>
      <h1>My To-Do List</h1>

      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {tasks.map((task,index) => (
        <div key={index}>
          <input type="checkbox" 
                 checked={task.completed} 
                 onChange={() => handleComplete(index)} 
          />
          <span
            style={{textDecoration: task.completed? "line-through" : "none",}}>
              {task.text}
          </span>
          <button onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App