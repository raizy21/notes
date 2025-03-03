import {
  updateNote as updateNoteToLocalStorage,
  updateUser as updateUserToLocalStorage,
  updateCurrentUser as updateCurrentUserToLocalStorage,
} from "../services/storage";  //importing updateNote, updateUser and updateCurrentUser from storage


//reducer for notes
export const noteReducer = (state, action) => {
  //switch case for different actions
  switch (action.type) {
    //case for adding a note
    case "NOTE_ADDED": {
      // console.log("Payload in reducer:", action.payload);
      const newNote = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
        imgUrl: action.payload.imgUrl,
        date: Date.now(),
        userId: action.payload.userId,
      };  //creating a new note object

      const newState = {
        ...state,
        notes: [newNote, ...state.notes],
      }; //creating a new state object

      updateNoteToLocalStorage(newState.notes); //updating notes to local storage
      return newState;    //returning new state
    }
    //case for editing a note
    case "NOTE_EDITED": {
      // console.log("Payload in reducer:", action.payload);
      //mapping through notes and updating the note with the given id
      const updatedNotes = state.notes.map((note) =>
        //if note id is equal to the payload id then update the note with the payload
        note.id === action.payload.id
          ? { ...note, ...action.payload, date: Date.now() }
          : note
      );//creating a new state object

      //updating notes to local storage
      updateNoteToLocalStorage(updatedNotes);
      //returning new state
      return { ...state, notes: updatedNotes };
    }
    //case for deleting a note
    case "NOTE_DELETED": {
      //filtering out the notes with the given id
      const deletedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      ); //creating a new state object

      //updating notes to local storage
      updateNoteToLocalStorage(deletedNotes);
      //return
      return { ...state, notes: deletedNotes };
    }
    //default case
    default:
      return state;
  }
};

//reducer for users
export const userReducer = (state, action) => {
  //switch case for different actions
  switch (action.type) {
    //case for adding a user
    case "USER_ADDED": {
      const newUser = {
        id: crypto.randomUUID(),
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
      };//creating a new user object

      //creating a new state object
      const newState = {
        ...state,
        users: [newUser, ...state.users],
      };

      //updating users to local storage
      updateUserToLocalStorage(newState.users);
      //returning new state
      return newState;
    }
    //case for signing in a user
    case "USER_SIGNED_IN": {
      //updating current user to local storage
      updateCurrentUserToLocalStorage(action.payload);
      //return
      return { ...state, currentUser: action.payload };
    }
    //case for signing out a user
    case "USER_SIGNED_OUT": {
      //updating current user to local storage
      updateCurrentUserToLocalStorage(null);
      //return
      return { ...state, currentUser: null };
    }
    //default case
    default:
      return state;
  }
};
