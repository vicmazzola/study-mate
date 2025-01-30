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
        setTasks(oldTasks => oldTasks.map(task => ({
            ...task,
            selected: task.id === selectedTask.id
        })));
    }

    function finishTask() {
        if (selected) {
            setSelected(null); // Should be `null`, not `undefined`
            setTasks(oldTasks =>
                oldTasks.map(task => {
                    if (task.id === selected.id) {
                        return {
                            ...task,
                            selected: false,
                            completed: true
                        };
                    }
                    return task;
                })
            );
        }
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks}/>
            <List
                tasks={tasks}
                selectTask={selectTask}
            />
            <Stopwatch
                selected={selected}
                finishTask={finishTask}
            />
        </div>
    )
}

export default App
