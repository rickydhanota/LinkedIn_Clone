import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className= {styles.app}>
      <Header />

      <div className= {styles.app_body}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
