import styles from '../styles/Post.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheckCircle, faShareSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";
import Image from 'next/image';

const Post = () => {
  const { selectedState, setSelectedState, postImage, postDP, postUser, postQuote } = useContext(AppContext);
  const _postImage = "url(" + postImage + ")";
  const _postDP = "url(" + postDP + ")";
  return (
    <div className={styles._container} style={{
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      background: _postImage
    }}>

      <div className={styles._top}>
        <div className={styles._title}>
          <div className={styles._displayImage} >
            <img src={postDP} alt="" />
          </div>
          <div className={styles._titleTexts} >
            <p style={{ margin: '0px', padding: '0px', color: 'grey', fontWeight: 'bold', fontSize: '14px' }}>{ postQuote }</p>
            <p style={{ margin: '0px', padding: '0px' }}>Posted on 16 Oct, 2022 ({postUser})</p>
          </div>
        </div>
        <div className={styles._media} >
          <img src={postImage} alt="" />
        </div>
        <div className={styles._icons}>
          <div className={styles._icon} style={{ marginRight: '4px', marginTop: '1px' }}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          Favorite
          <div className={styles._icon} style={{ marginLeft: '10px', marginRight: '4px', marginTop: '1px' }}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          In Stock
          <div className={styles._icon} style={{ marginLeft: 'auto', marginRight: '4px' }}>
            <FontAwesomeIcon icon={faShareSquare} />
          </div>
          Share
        </div>
      </div>
      <div className={styles._bottom}>
        <div className={styles._tag} onClick={() => {
          
        }} />
        <div className={styles._tag} onClick={() => {
          
        }} />
        <div className={styles._tag} onClick={() => {
          
        }} />
        <div className={styles._tagPlus} onClick={() => {
          
        }} >
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>

    </div>
  );
}

export default Post;