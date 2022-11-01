import React from 'react';
import styles from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Linkedinlogo from "../images/linkedin.png";
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logOut, selectUser } from '../features/userSlice';
import AvatarImage from "../images/avatarImage.jpg";

const Header = (props) => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        // alert("triggering log out of app")
        dispatch(logOut());
        auth.signOut();
    }

    return (
        <div className= {styles.header}>

            <div className={styles.header_left}>

                <img src={Linkedinlogo} alt='' />

                <div className={styles.header_search}>
                    <SearchIcon />
                    <input placeholder='search' type="text" />
                </div>
            </div>

            <div className={styles.header_right}>
                <HeaderOption title={"Home"} Icon = {HomeIcon} />
                <HeaderOption title={"My Network"} Icon = {SupervisorAccountIcon} />
                <HeaderOption title={"Jobs"} Icon = {BusinessCenterIcon} />
                <HeaderOption title={"Messaging"} Icon = {ChatIcon} />
                <HeaderOption title={"Notification"} Icon = {NotificationsIcon} />
                <HeaderOption title={"me"} onClick = {logoutOfApp} avatar = {true}/>
            </div>

        </div>
    );
};


export default Header;