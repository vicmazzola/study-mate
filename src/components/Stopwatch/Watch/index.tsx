import style from './Watch.module.scss';

export function Watch() {
    return (
        <>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchSeparator}>:</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>

        </>
    )
}

export default Watch;