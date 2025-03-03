import { useParams } from "react-router"; //importing useParams from react-router
import EditNote from "../components/EditNote"; //importing EditNote from components
import { useNotes } from "../context/context"; //importing useNotes from context

function EditPage() {
  const { id } = useParams(); // Get the note ID from the URL
  const {
    noteState: { notes },
  } = useNotes(); // Get the notes from the context

  const note = notes.find((n) => n.id === id); // Find the note with the ID

  //  If the note is not found, display a message
  if (!note) {
    return <p>Note not found!</p>;
  }

  return (
    <div>
      <EditNote key={note.id} note={note} />
    </div>
  );
}

export default EditPage;
