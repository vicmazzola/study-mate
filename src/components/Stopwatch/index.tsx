import Button from "../Button";
import Watch from "./Watch";
import style from './Stopwatch.module.scss';
import {timeToSeconds} from "../../common/utils/time.ts";
import {ITask} from "../../types/ITask.ts";
import {useEffect, useState} from "react";

interface StopwatchProps {
    selected: ITask | null;
    finishTask: () => void
}

export default function Stopwatch({selected, finishTask }: StopwatchProps) {

    const [time, setTime] = useState<number>(0
    );

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time) || 0)
        }

    }, [selected])

    function countdown(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return countdown(counter - 1);
            }
            finishTask();
        }, 1000)
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>
                Choose a card and start the stopwatch
            </p>
            <div className={style.watchWrapper}>
                <Watch time={time ?? 0}/>
            </div>
            <Button onClick={() => time && countdown(time)}>
                Start!
            </Button>
        </div>

    )
}