import styles from '../FeedBacks/Feedbacks.module.css';
import React from 'react';
interface IProps{
    options: string[];
    buttonIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Feedbacks = ({ options, buttonIncrement }:IProps):JSX.Element => {
    return (<div className={styles.container}>
        {options.map((feedback, index) => {
            return (<button className={styles.button} type='button' key={index} name={feedback} onClick={buttonIncrement}>{feedback}</button>)
        })}

    </div>);
};

