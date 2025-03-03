import { useState, useEffect } from "react"; //importing useState and useEffect from react
import { useNotes } from "../context/context";    //importing useNotes from context
import { toast } from "react-toastify";   //importing toast from react-toastify
import { useNavigate } from "react-router"; //importing useNavigate from react-router

// EditNote component
function EditNote({ note }) {
 
    const navigate = useNavigate(); //  Get the navigate function from the router
    const { noteDispatch } = useNotes();  // Get the noteDispatch function from the context

    // Initialize local state for the form
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        imgUrl: "",
    }); 

    // When the note prop is available or changes, update the form state
    useEffect(() => {
        if (note) {
            setFormData({
                title: note.title || "",
                content: note.content || "",
                category: note.category || "",
                imgUrl: note.imgUrl || "",
            });
        }
    }, [note]); //  Run this effect whenever the note prop changes

    // Handle changes for all input fields
    const handleChange = (e) => {
        const { name, value } = e.target; // Get the name and value from the input
        setFormData((prev) => ({ ...prev, [name]: value }));    // Update the form state
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!formData.title) return;  // If the title is empty, return early
        noteDispatch({
            type: "NOTE_EDITED",
            payload: { ...formData, id: note.id },
        });  // Dispatch the NOTE_EDITED action

        toast.success("Note edited successfully!", { autoClose: 1000 });  // Show a success message

        setTimeout(() => {
            navigate("/");
        }, 2000); // Navigate to the home page after 2 seconds
    };

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-lg w-full p-8 bg-base-100 rounded-lg mt-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block">
                            Title
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="input input-bordered w-full mt-1"
                                placeholder="Enter title"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="content" className="block">
                            Content
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Enter content..."
                                className="textarea textarea-bordered w-full mt-1"
                            ></textarea>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="cetagory" className="block">
                            Category
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select select-bordered w-full mt-1"
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                <option value="Personal">Personal</option>
                                <option value="Work">Work</option>
                                <option value="Study">Study</option>
                                <option value="Inspiration">Inspiration</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="imgUrl" className="block">
                            Image
                            <input
                                type="text"
                                name="imgUrl"
                                value={formData.imgUrl}
                                onChange={handleChange}
                                className="input input-bordered w-full mt-1"
                                placeholder="Paste image url here"
                            />
                        </label>
                    </div>
                    {/* {formData.imgUrl && (
                        <div className="w-full aspect-w-4 aspect-h-3">
                            <img
                                src={formData.imgUrl}
                                alt="Preview"
                                className="object-cover w-full h-full rounded"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "https://www.mindful.org/content/uploads/how-to-meditate.jpg";
                                }}
                            />
                        </div>
                    )} */}
                    <button type="submit" className="btn btn-primary w-full">
                        Edit this Note
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="btn btn-neutral w-full"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

// Export the EditNote component
export default EditNote;