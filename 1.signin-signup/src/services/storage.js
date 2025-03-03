// This page handles local storage for notes

//function to get notes from local storage
export const getNotes = () => {
  //returning notes from local storage
  return JSON.parse(localStorage.getItem("notes")) || [];
};

//function to update notes in local storage
export const updateNote = (notes) => {
  //updating notes in local storage
  localStorage.setItem("notes", JSON.stringify(notes));
};

//function to get users from local storage
export const getUsers = () => {
  //returning users from local storage
  return JSON.parse(localStorage.getItem("users")) || [];
};

//function to update users in local storage
export const updateUser = (users) => {
  //updating users in local storage
  localStorage.setItem("users", JSON.stringify(users));
};
//function to update current user in local storage
export const updateCurrentUser = (user) => {
  //updating current user in local storage
  localStorage.setItem("currentUser", JSON.stringify(user));
};

//function to get current user from local storage
export const getCurrentUser = () => {
  //returning current user from local storage
  return JSON.parse(localStorage.getItem("currentUser")) || null;
};

//function to get notes by category
export const getNotesByCategory = (category, userId) => {
  //getting notes from local storage
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  //returning notes with the given category
  return notes.filter(
    //filtering out the notes with the given category and userId
    (note) => note.category === category && note.userId === userId
  );
};
