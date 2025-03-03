// Desc: DeleteNote component to confirm deletion of a note
function DeleteNote({ isOpen, onClose, onConfirm }) {
  //  if isOpen is false, return null
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 opacity-100"
        onClick={onClose}
      ></div>

      <div className="bg-slate-900 p-6 rounded-lg shadow-xl z-10 max-w-md w-full transform transition-transform duration-300 scale-100 opacity-100">
        <p className="flex justify-center mb-2">
          <img
            src="/cartman.svg"
            alt="Delete Confirmation"
            className="w-64 h-auto animate-[growIn_0.4s_ease-out]"
          />
        </p>

        <p className="text-gray-300 text-center">
          Are you sure you want to delete this item?
        </p>

        <div className="mt-4 flex w-full items-center justify-between gap-2">
          <button onClick={onClose} className="btn w-1/2 btn-neutral">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn w-1/2 btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteNote;
