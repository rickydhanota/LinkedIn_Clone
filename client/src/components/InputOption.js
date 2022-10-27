import React from 'react';
import styles from "./InputOption.module.css";

const InputOption = (props) => {
    const{Icon, title, color} = props;

    return (
        <div className={styles.inputOption}>
            <Icon style={{color: color}} />
            <h4>{title}</h4>
        </div>
    );
};

export default InputOption;