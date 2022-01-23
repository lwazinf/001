import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Chat from '../components/Chat'
import Products from '../components/Product'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

export default function Home() {
  const { selectedState, setSelectedState } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <Products />
      <Post />
      <Chat />

      {/* <Grid /> */}
    </main>
  )
}

function Grid() {
  return ( 
    <div className={styles._container}>
        <div className={styles._gridPost}/>
        <div className={styles._gridPost}/>
        <div className={styles._gridPost}/>
        <div className={styles._gridPost}/>
    </div>
   );
}

// export default Grid;