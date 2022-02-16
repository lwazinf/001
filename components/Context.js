import { createContext, useState } from "react";

export const AppContext = createContext({}); 

export function ContextWrapper(props) {

    const [tray, setTray] = useState(false);
    const [fullObject, setFullObject] = useState({});
    const [modal, setModal] = useState(false);
    const [images, setImages] = useState({});
    
    return (
      <AppContext.Provider value={{ tray, setTray, fullObject, setFullObject, modal, setModal, images, setImages }}>
        {props.children}
      </AppContext.Provider>
    );
  }