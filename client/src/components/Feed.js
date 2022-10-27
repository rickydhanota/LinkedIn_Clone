import React, {useState} from 'react';
import styles from "./Feed.module.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Post from './Post';

const Feed = (props) => {

    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault();
    }

    return (
        <div className= {styles.feed}>
            <div className= {styles.feed_inputContainer}>
                <div className= {styles.feed_input}>
                    <CreateIcon />
                    <form>
                        <input type={"text"} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className={styles.feed_inputOptions}>
                    <InputOption title={'Photo'} Icon={AddAPhotoIcon} color ={"#378FE9"}/>
                    <InputOption title={'Video'} Icon={SmartDisplayIcon} color ={"#5F9B41"}/>
                    <InputOption title={'Event'} Icon={CalendarMonthIcon} color ={"#C37D16"}/>
                    <InputOption title={'Write Article'} Icon={RateReviewIcon} color ={"#E16745"}/>
                </div>
            </div>

           {/* <Post name={"Ricky Dhanota"} description={"This is a test"} message={"WOW this worked"}/>  */}
           {
            posts.map((post, index) => (
                <Post />
            ))
           }
        </div>
    );
};

export default Feed;