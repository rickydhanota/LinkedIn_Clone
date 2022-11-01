import React, {useState, useEffect} from 'react';
import styles from "./Feed.module.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Post from './Post';
import { db } from '../firebase';
import firebase from "firebase/compat/app";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Feed = (props) => {

    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className= {styles.feed}>
            <div className= {styles.feed_inputContainer}>
                <div className= {styles.feed_input}>
                    <CreateIcon />
                    <form>
                        <input type={"text"} value = {input} onChange = {(e) => setInput(e.target.value)} />
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
                <Post 
                key= {post.data.id} 
                name = {post.data.name}
                description = {post.data.description}
                message = {post.data.message}
                photoUrl = {post.data.photoUrl}
                />
            ))
           }
        </div>
    );
};

export default Feed;