import React from 'react';
import styles from "./Post.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputOption from './InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

const Post = (props) => {

    const {name, description, message, photoUrl} = props;

    return (
        <div className= {styles.post}>
            <div className={styles.post_header}>
                <AccountCircleIcon src = {photoUrl}> {name[0]} </AccountCircleIcon>
                <div className= {styles.post_info}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className= {styles.post_body}>
                <p>{message}</p>
            </div>

            <div className= {styles.post_button}>
                <InputOption Icon = {ThumbUpIcon} title = {"Like"} color ={"grey"} />
                <InputOption Icon = {CommentIcon} title = {"Comment"} color ={"grey"} />
                <InputOption Icon = {RepeatIcon} title = {"Repost"} color ={"grey"} />
                <InputOption Icon = {SendIcon} title = {"Send"} color ={"grey"} />
            </div>
        </div>
    );
};

export default Post;