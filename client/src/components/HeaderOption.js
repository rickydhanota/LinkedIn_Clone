import React from 'react';
import styles from "./HeaderOption.module.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const HeaderOption = (props) => {

    const {Icon, title, avatar, onClick} = props;
    const user = useSelector(selectUser);

    return (
        <div className= {styles.headerOption} onClick = {onClick} >
            {Icon && <Icon className = {styles.headerOption_icon} />}
            {avatar && <AccountCircleSharpIcon className = {styles.headerOption_icon} src={user?.photoUrl}> {user?.displayName} </AccountCircleSharpIcon>}
            <h3 className= {styles.headerOption_title}>{title}</h3>
        </div>
    );
};

export default HeaderOption;