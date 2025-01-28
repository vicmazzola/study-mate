import Form from "../components/Form";
import List from "../components/List";
import style from './App.module.scss';
import Stopwatch from "../components/Stopwatch";
import {useState} from "react";
import {ITask} from "../types/ITask.ts";

function App() {

    const [tasks, setTasks] = useState<ITask[]>([]);

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks}/>
            <List tasks={tasks}/>
            <Stopwatch/>
        </div>
    )
}

export default App
