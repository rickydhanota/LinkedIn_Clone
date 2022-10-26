import React from 'react';
import styles from "./HeaderOption.module.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


const HeaderOption = (props) => {

    const {Icon, title, avatar} = props;

    return (
        <div className= {styles.headerOption}>
            {Icon && <Icon className = {styles.headerOption_icon} />}
            {avatar && <AccountCircleSharpIcon className = {styles.headerOption_icon} src={avatar} />}
            <h3 className= {styles.headerOption_title}>{title}</h3>
        </div>
    );
};

export default HeaderOption;