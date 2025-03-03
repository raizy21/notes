import SignIn from "../components/SignIn"; // Add SignIn
import { useUsers } from "../context/context"; // Add useUsers

// SignInPage component
function SignInPage() {
  const userSate = useUsers(); //using useUsers
  console.log(userSate); //logging userSate

  return (
    <div>
      {/* SignIn component */}
      <SignIn />
    </div>
  );
}

export default SignInPage;
