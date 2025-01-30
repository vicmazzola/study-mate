import style from './Watch.module.scss';

interface WatchProps {
    time: number | undefined;

}

export default function Watch({ time = 0 }: WatchProps) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTens, minuteUnits] = String(minutes).padStart(2, '0');
    const [secondTens, secondUnits] = String(seconds).padStart(2, '0');


    return (
        <>
            <span className={style.watchNumber}>{minuteTens}</span>
            <span className={style.watchNumber}>{minuteUnits}</span>
            <span className={style.watchSeparator}>:</span>
            <span className={style.watchNumber}>{secondTens}</span>
            <span className={style.watchNumber}>{secondUnits}</span>

        </>
    )
}
