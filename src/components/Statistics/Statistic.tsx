import React from "react";
import styles from '../Statistics/Statistic.module.css';
interface IProperties {
    good: number,
    neutral: number,
    bad: number,
    total: number,
    positiveStats:number
}
export const Statistic=({good,neutral,bad,total,positiveStats}:IProperties):JSX.Element=> {
    return (
        <div className={styles.list}>
            <ul>
                <li className={styles.item}><p>Good:{ good}</p></li>
                <li className={styles.item}><p>Neutral:{neutral}</p></li>
                <li className={styles.item}><p>Bad:{bad}</p></li>
                <li className={styles.item}><p>Total:{total}</p></li>
                <li className={styles.item}><p>Positive Feedback: {positiveStats}%</p></li>
            </ul>
        </div>
    )
}
// Statistic.propTypes = {
//     good:PropTypes.number.isRequired,
//     neutral:PropTypes.number.isRequired,
//     bad:PropTypes.number.isRequired,
//     total:PropTypes.number.isRequired,
//     positiveStats:PropTypes.number.isRequired,
// }