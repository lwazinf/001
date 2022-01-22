import { createContext, useState } from "react";

export const AppContext = createContext({}); 

export function ContextWrapper(props) {

    const [modalState, setmodalState] = useState(true);
    const [runModal, setRunner] = useState(false);

    function loadModal() {
      return (
        setRunner(true)
          // setTimeout(function () {
          // }, 500)
      );
  }

  function killModal() {
      return (
          () => {
              setRunner(false);
              setTimeout(function () {
                  setmodalState(false)
              }, 200)
          }
      );
  }

    
    return (
      <AppContext.Provider value={{ modalState, setmodalState, runModal, setRunner, loadModal, killModal }}>
        {props.children}
      </AppContext.Provider>
    );
  }