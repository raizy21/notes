import { Link } from "react-router"; //importing Link from react-router
import { useUsers } from "../context/context"; //importing useUsers from context
import { useState } from "react"; //importing useState from react
import { toast } from "react-toastify"; //importing toast from react-toastify
import { useNavigate } from "react-router"; //importing useNavigate from react-router

// SignUp component
function SignUp() {
  const navigate = useNavigate(); //using useNavigate from react-router
  const {
    userState: { users },
    userDispatch,
  } = useUsers(); //using userState and userDispatch from useUsers
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  }); //using setFormData from useState
  const [errors, setErrors] = useState({}); //using setErrors from useState

  //function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target; //getting name and value from e.target
    setFormData((prev) => ({ ...prev, [name]: value })); //setting formData
  };

  //function to validate
  const validate = () => {
    let tempErrors = {}; //creating tempErrors

    // Basic field validations
    if (!formData.email) {
      //if email is not present
      tempErrors.email = "Email is required."; //setting tempErrors.email
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      //if email is not valid
      tempErrors.email = "Please enter a valid email."; //setting tempErrors.email
    }

    // Username is required
    if (!formData.username) {
      //if username is not present
      tempErrors.username = "Username is required."; //setting tempErrors.username
    }

    // Password is required and must be at least 6 characters long
    if (!formData.password) {
      //if password is not present
      tempErrors.password = "Password is required."; //setting tempErrors.password
    } else if (formData.password.length < 6) {
      //if password length is less than 6
      tempErrors.password = "Password must be at least 6 characters long."; //setting tempErrors.password
    }

    // Check if the user already exists
    const userExists = users?.find(
      (user) =>
        user.email.toLowerCase() === formData.email.toLowerCase() &&
        user.username.toLowerCase() === formData.username.toLowerCase()
    );
    //if user exists
    if (userExists) {
      tempErrors.general = "A user with that email or username already exists.";
    }

    // Return the errors
    return tempErrors;
  };

  //function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); //preventing default

    const validationErrors = validate(); //validating
    // If there are errors, set them and return early
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); //setting errors
      return; //returning
    }

    userDispatch({ type: "USER_ADDED", payload: formData }); //dispatching USER_ADDED

    toast.success("User added successfully!", { autoClose: 1000 }); //showing toast

    setFormData({ email: "", username: "", password: "" }); //setting formData
    setErrors({}); //setting errors

    setTimeout(() => {
      //setting timeout
      navigate("/signin");
    }, 2000); //navigating to signin
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src="/stan.svg" alt="Sign Up" className="w-72 md:w-80" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="max-w-lg w-full p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-center md:text-left mb-6">
                Sign Up
              </h2>
              <p className="text-center md:text-left">
                You have an account?
                <Link to="/signin" className="text-indigo-500 ml-1">
                  Sign in here
                </Link>
              </p>
            </div>

            <div>
              {errors.general && (
                <span className="text-red-800 text-center text-xs">
                  {errors.general}
                </span>
              )}
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              {errors.email && (
                <span className="text-red-800 text-xs mt-1 ml-2">
                  {errors.email}
                </span>
              )}
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="username"
                  className="grow"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              {errors.username && (
                <span className="text-red-800 text-xs mt-1 ml-2">
                  {errors.username}
                </span>
              )}
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="grow"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              {errors.password && (
                <span className="text-red-800 text-xs mt-1 ml-2">
                  {errors.password}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
