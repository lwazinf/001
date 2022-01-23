import styles from '../styles/Chat.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

function Chat() {
  const { tray, setTray } = useContext(AppContext);
    return (
      <div className={styles._blank}>
        <div className={styles._tray} style={{ right: tray ? '405px' : '0px' }} onClick={()=>{
          setTray(!tray)
        }}>
        <FontAwesomeIcon icon={faCompass} />
        </div>
      <div className={styles._container} style={{ width: tray ? '402px' : '0px' }}>
        <Tile dp={"https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} cover={"https://images.pexels.com/photos/4313546/pexels-photo-4313546.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} userName={'Kate Rice'} quote={'Three Boxes Left..!'} />

        <Tile dp={"https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} cover={"https://images.pexels.com/photos/4061385/pexels-photo-4061385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} userName={'Henry Gallow'} quote={'New Arrival - Custom Nike HighTops'} />
      </div>
      </div>
    );
  }
  
  export default Chat;

  
  function Tile(props) {
    const { selectedState, setSelectedState, setPostImage, setPostDP, tray, setPostUser, setPostQuote, setTray } = useContext(AppContext);
    const _dp = 'url(' + props.dp + ')'
    const _cover = 'url(' + props.cover + ')'
    return (
      <div className={styles._tile0} style={{ opacity: tray ? '1' : '0', transition: tray ? 'all 0.3s' : 'all 0.3s', marginRight: tray ? '0px' : '400px' }} onClick={() => {
        setPostImage(props.cover)
        setPostDP(props.dp)
        setPostUser(props.userName)
        setPostQuote(props.quote)
        setTray(!tray)
            }}>
        <div className={styles._tile}>
          <div className={styles._tileLeft}>
            <div className={styles._title}>
              <div className={styles._displayPic} style={{ background: _dp, backgroundSize: 'cover',
  backgroundPosition: 'center' }} />
              <p style={{ margin: '0px', padding: '0px', color: 'grey', fontWeight: 'bold', fontSize: '14px', marginTop: '12px', wordSpacing: '0px', letterSpacing: '0px' }}>{ props.userName }</p>
            </div>
            <p style={{ margin: '0px', fontWeight: 'normal', marginTop: '-2px', marginLeft: '5px', fontSize: '13px' }}>{props.quote}</p>
            <p style={{ margin: '0px', marginTop: '10px', letterSpacing: '0px', marginLeft: '5px', fontSize: '10px', color: '#b1b1b1' }}>SHOES | October 5, 2022</p>
          </div>
          <div className={styles._tileRight}>
            <div className={styles._cover} style={{ background: _cover, backgroundSize: 'cover',
  backgroundPosition: 'center' }} />
          </div>
        </div>
        <div className={styles._break} />
      </div>
    );
  }