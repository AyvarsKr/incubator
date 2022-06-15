import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [task, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (id: number) => {
        setTasks(task.filter((el) => el.id !== id))
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      removeTask={removeTask}
                      tasks={task} />
        </div>
    );
}

export default App;
