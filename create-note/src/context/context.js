import { createContext, useContext } from "react"; //importing createContext and useContext from react

const AppContext = createContext();  //creating a context

//creating a custom hook useNotes
const useNotes = () => {
  const { noteState, noteDispatch } = useContext(AppContext);
  return {
    noteState,
    noteDispatch,
  }; //returning noteState and noteDispatch
};

const useUsers = () => {
  const { userState, userDispatch } = useContext(AppContext);
  return {
    userState,
    userDispatch,
  }; //returning userState and userDispatch
};

export { useNotes, useUsers, AppContext }; //exporting useNotes, useUsers and AppContext
