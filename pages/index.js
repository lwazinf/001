import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Chat from '../components/Chat'
import Grid from '../components/Grid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faMapMarkerAlt, faPlusSquare, faExpand } from '@fortawesome/free-solid-svg-icons'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

export default function Home() {
  const { } = useContext(AppContext);
  const [header, setHeader] = useState(false)

  return (
    <main className={styles.main}>
      <Chat />
      <div className={styles._container} >
        <div className={styles._filter} style={{ opacity: header ? '0.3' : '1', transition: 'all 0.8s' }} />
        <div className={styles._controls2}>
          <div className={styles._icon} style={{ cursor: 'pointer', width: '15px', margin: '5px', color: 'ghostwhite' }} onClick={() => {
            setHeader(!header)
          }}>
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <div className={styles._dynamic} style={{ opacity: header ? '0.3' : '1', transition: header ? 'all 0.8s' : 'all 0.3s', position: 'relative', left: header ? '-100px' : '0px', pointerEvents: header ? 'none' : 'auto', }}>
          <div className={styles._dp}>
            <img src={"https://images.pexels.com/photos/5711040/pexels-photo-5711040.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} />
          </div>
          <div className={styles._controls}>
            <div className={styles._icon} style={{ cursor: 'pointer', width: '15px', margin: '5px', color: 'ghostwhite' }}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <div className={styles._icon} style={{ cursor: 'pointer', width: '11px', margin: '5px', color: 'ghostwhite' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className={styles._icon} style={{ cursor: 'pointer', width: '14px', margin: '5px', color: 'ghostwhite' }}>
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
          </div>
          <div style={{ color: "ghostwhite", fontWeight: 'bolder', fontSize: '36px', letterSpacing: '-1px' }} className={styles._title}>
            Project Jump
            <br />
            Rope
          </div>
          <div className={styles._miniTitle} style={{ color: "lightgrey", fontSize: '16px', letterSpacing: '-0.5px' }} >
            Keketso Ngoma
          </div>
          <div className={styles._subTitle} style={{ color: "lightgrey", fontSize: '14px', letterSpacing: '-0.5px' }} >
            The details of this page are currently under wraps!
          </div>
        </div>
      </div>
      <div className={styles._row}>
        <Post />
        <Grid />
      </div>
    </main>
  )
}

