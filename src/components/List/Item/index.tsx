import style from "../List.module.scss"
import {ITask} from "../../../types/ITask.ts";

export default function Item({task, time, selected, completed, id}:  ITask ) {
    console.log('actual item: ', {task, time, selected, completed, id})
    return (

        <li className={style.item}>
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}

