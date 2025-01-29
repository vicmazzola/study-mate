import style from "../List.module.scss"
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
    console.log('actual item: ', {task, time, selected, completed, id})
    return (

        <li
            className={style.item}
            onClick={() => selectTask(
                {
                    task,
                    time,
                    selected,
                    completed,
                    id
                }
            )}>
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}

