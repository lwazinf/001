import styles from '../styles/Grid.module.css'
import React, { useContext, useState } from "react";
import { AppContext } from "../components/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import {
  collection,
  query,
  addDoc,
  onSnapshot,
  doc, setDoc, orderBy
} from "firebase/firestore";
import { db } from "../firebase";

const Grid = () => {

  const [gridItems, setGridItems] = useState([]);
  const { setModal, modal, images, setImages } = useContext(AppContext);

  React.useEffect(() => {
    const q = query(collection(db, "gridImages"), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ ...doc.data(), id: doc.id });
      });
      setGridItems(itemsArray);
    });
    return () => unsub();
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
            dp={gridItem.dp}
            userName={gridItem.userName}
            quote={gridItem.quote}
            url={gridItem.url}
            tags={gridItem.tags}
            fullObject={gridItem}
          />
        ))
      }
    </div>
  );
}

export default Grid;

function Item(props) {

  const { setPostImage, setPostDP, setPostUser, setPostQuote, setPostTags, setFullObject, setPostToggle, fullObject } = useContext(AppContext);
  const _url = 'url(' + props.url + ')';

  return (
    <div style={{ opacity: props.fullObject.id == fullObject.id ? '0.5' : '1.0', transition: 'all 0.5s' }} >
      <div className={styles._gridPost} style={{ background: _url, backgroundSize: "cover", backgroundPosition: 'center', width: props.fullObject.id == fullObject.id ? '140px' : '145px', height: props.fullObject.id == fullObject.id ? '140px' : '145px' }} onClick={() => {
        if (Object.keys(fullObject).length == 0 || fullObject != props.fullObject) {
          setPostImage(props.url)
          setPostDP(props.dp)
          setPostUser(props.userName)
          setPostQuote(props.quote)
          setPostTags(props.tags)
          setFullObject(props.fullObject)
          setPostToggle(false)
          // console.log()
        }else{
          setPostImage('')
          setPostDP('')
          setPostUser('')
          setPostQuote('')
          setPostTags([])
          setFullObject({})
          setPostToggle(false)
        }
      }} />
    </div>
  );
}