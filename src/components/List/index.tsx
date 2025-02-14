import style from './List.module.scss';
import Item from "./Item";
import {ITask} from "../../types/ITask.ts";

interface ListProps  {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void;
}



function List({tasks, selectTask}: ListProps ) {

    return (
        <aside className={style.taskList}>
            <h2 >Day's Tasks</h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;