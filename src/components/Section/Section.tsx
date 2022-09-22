import React from "react";
import styles from '../Section/Section.module.css';
interface IProp{
    title: string,
    children:JSX.Element
}

export const  Section = ({ title, children }:IProp):JSX.Element => {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
           
            {children}
        </section>
    );
};

