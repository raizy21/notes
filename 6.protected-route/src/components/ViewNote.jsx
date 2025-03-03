// Desc: View Note Modal
function ViewNote({ isOpen, onClose, note }) {
  if (!isOpen) return null; //if isOpen is false, return null

  //function to get category color
  const getCategoryColor = (category) => {
    const categoryColors = {
      Inspiration: "border-indigo-500 text-indigo-500",
      Study: "border-violet-500 text-violet-500",
      Personal: "border-blue-500 text-blue-500",
      Work: "border-sky-500 text-sky-500",
    }; //defining categoryColors

    //returning categoryColors[category] or "border-gray-500 text-gray-500"
    return categoryColors[category] || "border-gray-500 text-gray-500";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 bg-base-100 text-base-content p-6 rounded-lg shadow-lg max-w-lg w-full">
        {note.category && (
          <span
            className={`badge badge-outline ${getCategoryColor(
              note.category
            )} px-3 py-1`}
          >
            {note.category}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-2">{note.title}</h2>

        <p className="mt-4 whitespace-pre-line">{note.content}</p>
        {note.imgUrl && (
          <figure className="mt-4">
            <img
              src={note.imgUrl}
              alt="Full Note"
              className="rounded object-cover w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://www.mindful.org/content/uploads/how-to-meditate.jpg";
              }}
            />
          </figure>
        )}
        <div className="mt-6 flex gap-2">
          <button onClick={onClose} className="btn btn-neutral flex-1">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewNote;
