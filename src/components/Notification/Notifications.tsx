import styles from '../Notification/Notifications.module.css'; 
import React from 'react';

export const Notification = ({ message }:  { message: string } ):JSX.Element => {
    return (
        <p className={styles.p}>{message}</p>
    )
}


