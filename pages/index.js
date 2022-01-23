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

      <Grid />
    </main>
  )
}

function Grid() {
  return ( 
    <div className={styles._container}>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/6540980/pexels-photo-6540980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/6664300/pexels-photo-6664300.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/4252970/pexels-photo-4252970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', backgroundSize: "cover"}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/4061395/pexels-photo-4061395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/6540973/pexels-photo-6540973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
        <div className={styles._gridPost} style={{ background: 'url("https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")', backgroundSize: "cover", backgroundPosition: 'center'}}/>
    </div>
   );
}

// export default Grid;