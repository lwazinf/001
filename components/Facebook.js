import styles from '../styles/Facebook.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheckCircle, faShareSquare, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

import { ref, deleteObject, getStorage } from "firebase/storage";
import { addDoc, collection, serverTimestamp, setDoc, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Facebook = () => {
  const { fullObject } = useContext(AppContext);
  const [signal, setSignal] = useState(true)
  const [fav, setFav] = useState(true)
  const [data, setData] = useState([])
  
  if(Object.keys(fullObject).length > 0){
    const docRef = doc(db, 'gridImages', fullObject.id)
    getDoc(docRef)
  .then((doc) => {
    let x = []
    Object.keys(doc.data().tags).forEach((key) => {
      x.push(doc.data().tags[key]);
    });
    setData(x)
  })
  // console.log(data)
}

  const storage = getStorage();

  return (
    <div className={styles._container} style={{
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      background: fullObject.url == '' ? 'red' : fullObject.url,
      transition: 'all 0.5s'
    }}>

      <div className={styles._top} style={{ position: 'relative', top: Object.keys(fullObject).length != 0 ? '0px' : '-360px', opacity: Object.keys(fullObject).length != 0 ? '1' : '0', transition: 'all 0.5s' }}>
        <div className={styles._title}>
          <div className={styles._displayImage} >
            <img src={fullObject.dp} alt="" />
          </div>
          <div className={styles._titleTexts} >
            <p style={{ margin: '0px', padding: '0px', color: 'grey', fontWeight: 'bold', fontSize: '14px' }}>{fullObject.quote}</p>
            <p style={{ margin: '0px', padding: '0px' }}>Posted on { Object.keys(fullObject).length != 0 ? 
            `${Date(fullObject.timestamp.seconds).split(' ')[2]} ${Date(fullObject.timestamp.seconds).split(' ')[1]}, ${Date(fullObject.timestamp.seconds).split(' ')[3]}` : '' } ({fullObject.userName})</p>
          </div>
        </div>
        <div className={styles._media} onClick={() => {
          setSignal(!signal);
        }} >

          <div className={styles._imgText} alt="" style={{ opacity: signal ? "1.0" : '0.0', transition: 'all 0.2s' }}>
            <p>
              {fullObject.quoteMain}
            </p>
          </div>

          <div style={{ opacity: signal ? "0.05" : '1.0', transition: 'all 0.2s' }} >
            <img src={fullObject.url} alt="" />
          </div>
        </div>
        <div className={styles._icons}>
          <div className={styles._icon} style={{ marginLeft: '10px', marginTop: '0px', color: 'green' }}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className={styles._icon} style={{ marginLeft: '10px', marginTop: '0px', color: fav ? 'orangered' : 'rgb(177, 177, 177)', cursor: 'pointer', transition:  fav ? 'all 1s' : 'all 0.0s' }} onClick={() => {
            setFav(!fav)
          }} >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles._icon} style={{ marginLeft: '10px', marginTop: '0px', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faShareSquare} />
          </div>
          <div className={styles._icon} style={{ marginLeft: 'auto', marginRight: '10px', padding: '1px', marginTop: '-2px', color: 'crimson', cursor: 'pointer', opacity: '0.4' }} onClick={() => {

            deleteObject(
              ref(storage, fullObject.url)
            ).then(async () => {
              await deleteDoc(doc(db, "gridImages", fullObject.id));
            }).catch((error) => {
              // Uh-oh, an error occurred!
            });

          }}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      </div>
      <div className={styles._bottom}>
        {
          data.map((tag) => (
            <div key={tag.id} className={styles._tag} onClick={async () => {
              const docRef = collection(db, 'gridImages');
              // console.log(docRef); 
              // await addDoc(docRef, {
              //   userName: "Kate Rice",
              //   quote: 'Get these before they run out..',
              //   tags: ['running', 'sport'],
              //   dp: 'https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              //   url: 'https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              // }); 

              await setDoc(doc(db, "gridImages", fullObject.id), {
                userName: fullObject.userName,
                tags: _tags.filter(e => e !== tag),
                dp: fullObject.dp,
                timestamp: fullObject.timestamp,
                imageName: fullObject.imageName,
                quote: fullObject.quote,
                quoteMain: fullObject.quoteMain,
                url: fullObject.url,
                favorite: fullObject.favorite
              }).then(() => {
                // setFullObject(fullObject.fullObject)
                // setPostToggle(false)
              });

              setPostImage(fullObject.url)
                setPostDP(fullObject.dp)
                setPostUser(fullObject.userName)
                setPostQuote(fullObject.quote)
                setPostTags(fullObject.tags)

              console.log(_tags.filter(e => e !== tag))
            }} >
              #{tag}
            </div>
          ))
        }
        {/* {
          postTags.length === 3 ?
          <></>
          :
          <div className={styles._tagPlus} onClick={() => {

        }} >
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        } */}
      </div>

    </div>
  );
}

export default Facebook;