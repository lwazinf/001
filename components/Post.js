import styles from '../styles/Post.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheckCircle, faShareSquare } from '@fortawesome/free-solid-svg-icons'


const Post = () => {
  return (
    <div className={styles._container}>
      <div className={styles._top}>
        <div className={styles._title}>
          <div className={styles._displayImage} />
          <div className={styles._titleTexts} >
            <p style={{ margin: '0px', padding: '0px', color: 'grey', fontWeight: 'bold', fontSize: '14px' }}>New Arrival - Custom Nike HighTops</p>
            <p style={{ margin: '0px', padding: '0px' }}>Posted on 16 Oct, 2022 (Henry Gallow)</p>
          </div>
        </div>
        <div className={styles._media} />
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

      </div>
    </div>
  );
}

export default Post;