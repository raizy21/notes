import { useReducer } from "react";  //importing useReducer from react
import { AppContext } from "./context";   //importing AppContext from context
import { userReducer, noteReducer } from "./reducer";  //importing userReducer and noteReducer from reducer
import { getCurrentUser, getNotes, getUsers } from "../services/storage"; //importing getCurrentUser, getNotes and getUsers from storage

function AppContextProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, {
    users: getUsers(),
    currentUser: getCurrentUser(),
  }); //using useReducer to get userState and userDispatch

  const [noteState, noteDispatch] = useReducer(noteReducer, {
    notes: getNotes(),
  }); //using useReducer to get noteState and noteDispatch

  const context = {
    noteState,
    noteDispatch,
    userState,
    userDispatch,
  };  //creating a context object

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>; //returning AppContext.Provider with value as context
}

export default AppContextProvider; //exporting AppContextProvider
