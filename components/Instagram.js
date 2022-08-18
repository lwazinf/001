import styles from '../styles/Instagram.module.css'
import React, { useContext, useState } from "react";
import { AppContext } from "./Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import {
  collection,
  query,
  addDoc,
  onSnapshot,
  doc, setDoc, orderBy, where
} from "firebase/firestore";
import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'

const Instagram = () => {

  const [gridItems, setGridItems] = useState([]);
  const { setModal, modal, images, setImages } = useContext(AppContext);

  React.useEffect(() => {
    const auth = getAuth()
    // const uid = auth.currentUser.uid
    const q = query(collection(db, "gridImages"), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ ...doc.data(), id: doc.id });
      });
      setGridItems(itemsArray);
    });
  }, []);

  // // // // // //

  const onMutate = (e) => {

    // Files
    if (e.target.files) {
      setModal(true)
      setImages([e.target.files[0], URL.createObjectURL(e.target.files[0])])
      console.log(e.target.files[0])
    } else {
      console.log("No Images Selected!");
    }

  }

  // // // // // // // // //

  return (
    <div className={styles._container}>
      <form>
        <input
          className='formInputFile'
          type='file'
          id='images'
          max='6'
          accept='.jpg,.png,.jpeg'
          onChange={onMutate}
          multiple
          required
          hidden
        />
        <label htmlFor='images'>
          <div className={styles._plus} style={{ height: '145px' }} id='adhoc' onClick={async () => {
            //  setModal(!modal);

          }}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </div>
        </label>
      </form>
      {
        gridItems.map((gridItem) => (
          <Item
            key={gridItem.id}
            fullObject={gridItem}
          />
        ))
      }
    </div>
  );
}

export default Instagram;

function Item(props) {

  const { fullObject, setFullObject } = useContext(AppContext);
  const _url = 'url(' + props.fullObject.url + ')';

  return (
    <div style={{ opacity: props.fullObject.id == fullObject.id ? '0.5' : '1.0', transition: 'all 0.5s', cursor: 'pointer' }} >
      <div className={styles._GridPost} style={{ background: _url, backgroundSize: "cover", backgroundPosition: 'center', width: props.fullObject.id == fullObject.id ? '140px' : '145px', height: props.fullObject.id == fullObject.id ? '140px' : '145px' }} onClick={() => {
        if (Object.keys(fullObject).length == 0 || fullObject != props.fullObject) {
          // setPostImage(props.url)
          // setPostDP(props.dp)
          // setPostUser(props.userName)
          // setPostQuote(props.quote)
          // setPostTags(props.tags)
          setFullObject(props.fullObject)
          console.log(props.fullObject.id)
        } else {
          // setPostImage('')
          // setPostDP('')
          // setPostUser('')
          // setPostQuote('')
          // setPostTags([])
          // setFullObject({})
          // setPostToggle(false)
        }
      }} />
    </div>
  );
}