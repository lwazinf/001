import { createContext, useState } from "react";

export const AppContext = createContext({}); 

export function ContextWrapper(props) {

    const [postImage, setPostImage] = useState("");
    const [tray, setTray] = useState(false);
    const [postDP, setPostDP] = useState("");
    const [postUser, setPostUser] = useState("");
    const [postQuote, setPostQuote] = useState("");
    const [fullObject, setFullObject] = useState({});
    const [postTags, setPostTags] = useState([]);
    const [modal, setModal] = useState(false);
    const [postToggle, setPostToggle] = useState(true);
    const [images, setImages] = useState({});
    
    return (
      <AppContext.Provider value={{ postImage, setPostImage, tray, setTray, postDP, setPostDP, postUser, setPostUser, postQuote, setPostQuote, postTags, setPostTags, fullObject, setFullObject, modal, setModal, postToggle, setPostToggle, images, setImages }}>
        {props.children}
      </AppContext.Provider>
    );
  }