import { useState } from "react"; //importing useState from react
import Card from "../components/Card";    //importing Card from components
import Menu from "../components/Menu";    //importing Menu from components
import NoNotes from "../components/NoNotes";  //importing NoNotes from components
import { useNotes, useUsers } from "../context/context";    //importing useNotes and useUsers from context
import { getNotesByCategory } from "../services/storage"; //importing getNotesByCategory from storage

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");  //using useState to set selectedCategory to "All"
  const {
    noteState: { notes },
  } = useNotes(); //using useNotes to get notes

  const {
    userState: { currentUser },
  } = useUsers(); //using useUsers to get currentUser

  let userNotes = [];//creating an empty array userNotes
  if (selectedCategory === "All") {
    userNotes = notes.filter((note) => note.userId === currentUser.id);
  } else {
    userNotes = getNotesByCategory(selectedCategory, currentUser.id);
  }// if selectedCategory is "All" then userNotes will be notes filtered by currentUser.id else userNotes will be notes filtered by selectedCategory and currentUser.id


  return (
    <>
      <div className="container mx-auto p-4">
        <Menu setSelectedCategory={setSelectedCategory} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
          {userNotes.length > 0 ? (
            userNotes.map((note) => <Card key={note.id} note={note} />)
          ) : (
            <NoNotes />
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
