import Button from "../Button";
import Watch from "./Watch";
import style from './Stopwatch.module.scss';

export default function Stopwatch() {
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