import React, { useState } from 'react';
import styles from "./Login.module.css";
import LinkedinLogo from "../images/LinkedinLogo.png";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = (props) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] =  useState("");
    const [profilePic, setProfilePic] =  useState("");
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if(!name){
            return alert("Please enter a full name");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth => {
            // alert("made it to register")
            console.log(userAuth)
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
            .catch(err => console.log(err));
        })
        .catch(err => {
            console.log(err);
            alert(err);
        })
    }

    const logIntoApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        })
        .catch(err => {
            console.log(err)
            alert(err)
        })
    }

    return (
        <div className= {styles.login}>
            <img src= {LinkedinLogo} alt ="logo"/>
            <form onSubmit={logIntoApp}>
                <input type="text" placeholder="Full Name (required if registering" value={name} onChange={(e) => (setName(e.target.value))} />
                <input placeholder='Profile picture URL (optional)' type={"text"} value = {profilePic} onChange = {(e) => (setProfilePic(e.target.value))} />
                <input placeholder='Email' type={"email"} onChange = {(e)=> (setEmail(e.target.value))} value = {email} />
                <input placeholder='Password' type={"password"} onChange ={(e) => (setPassword(e.target.value))} value = {password} />
                <button type="submit">Sign In</button> 
            </form>
            <p>Not a member? <span className= {styles.login_register} onClick = {register} >Register Now</span></p>

        </div>
    );
};

export default Login;