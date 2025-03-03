import { useState } from "react"; //importing useState from react
import { Link, useNavigate } from "react-router";   //importing Link and useNavigate from react-router
import { IoHome } from "react-icons/io5";   //importing IoHome from react-icons/io5
import { MdNoteAdd } from "react-icons/md"; //importing MdNoteAdd from react-icons/md 
import { BiUser, BiSolidUser, BiLogOut } from "react-icons/bi"; //importing BiUser, BiSolidUser, BiLogOut from react-icons/bi
import { useUsers } from "../context/context"; //importing useUsers from ../context/context
import { toast } from "react-toastify"; //importing toast from react-toastify

function Navbar() {
  const navigate = useNavigate(); //using useNavigate from react-router
  const {
    userState: { currentUser },
    userDispatch,
  } = useUsers(); //using userState and userDispatch from useUsers

  const [isOpen, setIsOpen] = useState(false);//using setIsOpen from useState
  const isLoggedIn = !!currentUser;   //using !!currentUser


  //function to handle logout
  const handleLogout = () => {
    //dispatching USER_SIGNED_OUT
    userDispatch({ type: "USER_SIGNED_OUT" });

    //showing toast
    toast.info("Logged out successfully", { autoClose: 1000 });

    //navigating to signin
    navigate("/signin");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50">
        <div className="navbar container mx-auto px-4 py-3">
          <div className="navbar-start">
            <Link
              to="/"
              className="btn btn-ghost text-2xl font-bold text-primary"
            >
              Noted.
            </Link>
          </div>

          <div className="navbar-end flex items-center space-x-4">
            <ul className="hidden lg:flex menu menu-horizontal px-1 space-x-4">
              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      <IoHome className="text-xl" /> Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/add-note"
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      <MdNoteAdd className="text-xl" />
                      Add Note
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <div className="dropdown dropdown-bottom dropdown-end hidden sm:flex">
              <label
                tabIndex={0}
                className="btn btn-ghost flex items-center cursor-pointer"
              >
                {isLoggedIn ? (
                  <>
                    <BiSolidUser className="text-2xl" />
                    {currentUser?.username
                      ? currentUser.username.charAt(0).toUpperCase() +
                        currentUser.username.slice(1)
                      : "Guest"}
                  </>
                ) : (
                  <BiUser className="text-2xl" />
                )}
              </label>

              {/* Dropdown menu appears only if logged in */}
              {isLoggedIn && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-32"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn-sm btn glass btn-outline btn-primary flex items-center justify-start gap-2 px-3"
                    >
                      <BiLogOut className="text-lg" /> Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-base-100 shadow-md">
            <ul className="menu menu-compact flex flex-col items-center space-y-2 py-4">
              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      <IoHome className="text-xl" /> Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/add-note"
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      <MdNoteAdd className="text-xl" /> Add Note
                    </Link>
                  </li>
                </>
              )}
              <li className="relative">
                <div className="dropdown dropdown-bottom">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost flex items-center gap-2 cursor-pointer"
                  >
                    {isLoggedIn ? (
                      <BiSolidUser className="text-2xl" />
                    ) : (
                      <BiUser className="text-2xl" />
                    )}
                    {isLoggedIn ? "Test" : "Sign In"}
                  </label>
                  {isLoggedIn && (
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-40"
                    >
                      <li>
                        <button
                          // onClick={handleLogout}
                          className="btn btn-error w-full flex gap-2"
                        >
                          <BiLogOut className="text-xl" /> Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
