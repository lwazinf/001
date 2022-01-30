import styles from '../styles/Modal.module.css'
import React, { useContext, useState } from "react";
import { AppContext } from "../components/Context";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import {
    collection,
    query,
    addDoc,
    onSnapshot,
    doc, setDoc,
    serverTimestamp
} from "firebase/firestore";
import { db } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Modal() {
    const { modal, setModal, images, setImages } = useContext(AppContext);
    const [details, setDetails] = useState({ quote: '', tags: [], quoteMain: '' })
    const [_tags, set_tags] = useState([])

    // Store image in firebase
    const storeImage = async (image) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage()
            const fileName = `${image.name}`

            const storageRef = ref(storage, 'images/' + fileName)

            const uploadTask = uploadBytesResumable(storageRef, image)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused')
                            break
                        case 'running':
                            console.log('Upload is running')
                            break
                        default:
                            break
                    }
                    setModal(!modal)

                },
                (error) => {
                    reject(error)
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        resolve(downloadURL)
                        setImages(images.push(downloadURL))
                        await addDoc(collection(db, "gridImages"), {
                            dp: 'https://images.pexels.com/photos/5711040/pexels-photo-5711040.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                            timestamp: serverTimestamp(),
                            userName: 'Keketso Ngoma',
                            imageName: fileName,
                            quote: details.quote,
                            quoteMain: details.quoteMain,
                            url: images[2],
                            tags: details.tags,
                            favorite: [],
                        });
                    })
                }
            )

        })
    }

    return (
        <div className={styles._modal} style={{ top: modal ? "150px" : "-300px", transition: modal ? 'all 0.5s' : 'all 0.3s' }}>
            <div className={styles._tempImg} style={{ background: `url('${images[1]}')`, backgroundSize: 'cover' }}>
            </div>
            <div onClick={() => { }} className={styles._info} >
                <input type='text' className={styles._textInput} placeholder='quote..' onChange={(e) => {
                    // set_tags()
                    setDetails({ quote: e.target.value, tags: details.tags, quoteMain: details.quoteMain })
                    console.log(details)
                }} />
                <input type='text' className={styles._textInput} placeholder='quoteMain..' onChange={(e) => {
                    // set_tags()
                    setDetails({ quote: details.quote, tags: details.tags, quoteMain: e.target.value })
                    console.log(details)
                }} />
                <input type='text' className={styles._textInput} placeholder='tags..' onChange={(e) => {
                    // set_tags()
                    setDetails({ quote: details.quote, tags: e.target.value.split(" ").slice(0, 3), quoteMain: details.quoteMain })
                    console.log(details)
                }} />
                <input type='submit' value='Upload' onClick={() => {
                    storeImage(images[0])
                }} style={{}} className={styles._submit} />
            </div>
        </div>
    );
}

export default Modal;