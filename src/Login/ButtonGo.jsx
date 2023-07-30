import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

export default function ButtonGo() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const navigationHandler = () => {
    // eslint-disable-next-line
    {
      authContext.isLoggedIn ? navigate("/workspace") : navigate("/signup");
    }
  };
  return (
    <button
      onClick={navigationHandler}
      className="border border-gray-300 p-2 rounded-md text-blue-600 mx-auto max-w-sm mt-4 md:mt-16"
    >
      {authContext.isLoggedIn ? "Go To Sheets" : "Sign In"}
    </button>
  );
}
