import React from 'react';
import styles from "./Sidebar.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = (props) => {

    const recentItem = (topic) => {
        return(
            <div className= {styles.sidebar_recentItem}>
                <span className= {styles.sidebar_hash} >#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className= {styles.sidebar}>
            <div className= {styles.sidebar_top}>
                <img src='https://wallpaperaccess.com/full/4431274.jpg' alt='' /> 
                <AccountCircleIcon fontSize='large' className= {styles.sidebar_avatar}/>
                <h2>Ricky Dhanota</h2>
                <h4>Biomedical Engineer | Experienced Product Development Engineer | Software Engineer | Full Stack Developer</h4>
            </div>

            <div className= {styles.sidebar_stats}>
                <div className= {styles.sidebar_stat}>
                    <p>Who's viewed you</p>
                    <p className= {styles.sidebar_statNumber}>2,000</p>
                </div>

                <div className= {styles.sidebar_stat}>
                    <p>Connections</p>
                    <p className= {styles.sidebar_statNumber}>128</p>
                </div>
            </div>

            <div className= {styles.sidebar_bottom}>
            <p>Recent </p>
            {recentItem("Penumbra")}
            {recentItem("Design Quality Engineer")}
            {recentItem("Software Engineering")}
            {recentItem("V&V")}
            {recentItem("Biomedical Engineer")}
            {recentItem("Programming")}
            {recentItem("React JS")}
            </div>
            
        </div>
    );
};

export default Sidebar;