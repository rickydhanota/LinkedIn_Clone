import React from 'react';
import styles from "./Widgets.module.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = (props) => {

    const newsArticle = (heading, subtitle) => {
        return(
            <div className={styles.widgets_article}>
                <div className={styles.widgets_articleLeft}>
                    <FiberManualRecordIcon className={styles.widgets_bulletPoint} />
                </div>

                <div className={styles.widgets_articleRight}>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.widgets}>
            <div className={styles.widgets_header}>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div> 

            {newsArticle("Shock Bump in Sept. job openings", "Top news - 85,027 readers")}
            {newsArticle("Fast furniture has a fallout", "9h ago - 10,509 readers")}
            {newsArticle("Musk team mulls Twitter revamp", "11h ago - 194,185 readers")}
            {newsArticle("Colleges see pandemic learning loss", "11h ago - 5,108 readers")}
            {newsArticle("Prime members get free Amazon Music", "9h ago - 5,266 readers")}
            {newsArticle("Ricky built an amazing LinkedIn Clone!", "1h ago - 1,000,000 readers")}

        </div>
    );
};

export default Widgets;