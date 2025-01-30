import Button from "../Button";
import Watch from "./Watch";
import style from './Stopwatch.module.scss';
import {timeToSeconds} from "../../common/utils/date.ts";

export default function Stopwatch() {
    console.log('converting:  ', timeToSeconds('01:01:01'));
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>
                Choose a card and start the stopwatch
            </p>
            <div className={style.watchWrapper}>
                <Watch/>
            </div>
                <Button>
                    Start!
                </Button>
        </div>

    )
}