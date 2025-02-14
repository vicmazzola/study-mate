import style from "./Item.module.scss"
import {ITask} from "../../../types/ITask.ts";

interface ItemProps extends ITask {
    selectTask: (selectedTask: ITask) => void;
}


export default function Item(
    {
        task,
        time,
        selected,
        completed,
        id,
        selectTask
    }: ItemProps) {
    return (

        <li
            className={`${style.item} ${selected ? style.itemSelected : ""} ${completed ? style.itemCompleted : ""} `}
            onClick={() => !completed && selectTask(
                {
                    task,
                    time,
                    selected,
                    completed,
                    id
                }
            )}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.completed} aria-label="task-completed"></span>}
        </li>
    )
}

