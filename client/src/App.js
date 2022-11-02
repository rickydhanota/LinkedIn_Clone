import React, { useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import {useDispatch, useSelector} from 'react-redux';
import { login, logOut, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './components/Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else{
        dispatch(logOut());
      }
    })
  }, [])

  return (
    <div className= {styles.app}>
      <Header />
      {
        !user ? (<Login />):(
          <div className= {styles.app_body}>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )
      }

    </div>
  );
}

export default App;
