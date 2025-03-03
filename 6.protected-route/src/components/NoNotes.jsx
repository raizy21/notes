import { Link } from "react-router"; //importing Link from react-router

function NoNotes() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center h-[60vh]">
      <img
        src="/group.svg"
        alt="No Data"
        className="w-80 h-auto animate-fade-in transform transition-transform duration-700 hover:scale-110"
      />
      <p className="text-center text-slate-200/30 text-3xl font-bold mt-6 drop-shadow-lg animate-fade-in animate-delay-300">
        No notes available. Start adding one! ✏️
      </p>
      <Link to="/add-note">
        <div className="mt-4 w-36 p-4 bg-indigo-500 text-gray-800 rounded-full animate-pulse text-center">
          Add Note
        </div>
      </Link>
    </div>
  );
}

export default NoNotes;
