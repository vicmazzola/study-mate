import Form from "../components/Form";
import List from "../components/List";
import style from './App.module.scss';
import Stopwatch from "../components/Stopwatch";
import {useState} from "react";
import {ITask} from "../types/ITask.ts";


function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const [selected, setSelected] = useState<ITask | null>(null);

    function selectTask(selectedTask: ITask) {
        setSelected(selectedTask)
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks}/>
            <List
                tasks={tasks}
                selectTask={selectTask}
            />
            <Stopwatch/>
        </div>
    )
}

export default App
