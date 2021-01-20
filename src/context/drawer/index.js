import React, { useReducer, createContext } from "react";
export const DrawerContext = createContext();

const initialState = {
  open: false,
  anchor: "left",
  variant: "temporary",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openDrawer":
      return { ...state, open: true };
    case "closeDrawer":
      return { ...state, open: false };
    default:
      return { initialState };
  }
};

const DrawerContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <DrawerContext.Provider value={value}>
      {props.children}
    </DrawerContext.Provider>
  );
};
export default DrawerContextProvider;
