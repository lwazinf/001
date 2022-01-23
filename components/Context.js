import { createContext, useState } from "react";

export const AppContext = createContext({}); 

export function ContextWrapper(props) {

    const [postImage, setPostImage] = useState("");
    const [tray, setTray] = useState(true);
    const [postDP, setPostDP] = useState("");
    const [postUser, setPostUser] = useState("");
    const [postQuote, setPostQuote] = useState("");
    
    return (
      <AppContext.Provider value={{ postImage, setPostImage, tray, setTray, postDP, setPostDP, postUser, setPostUser, postQuote, setPostQuote }}>
        {props.children}
      </AppContext.Provider>
    );
  }