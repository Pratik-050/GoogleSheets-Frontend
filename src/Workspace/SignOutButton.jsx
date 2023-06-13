import React, { useContext } from "react";
import AuthContext from "../Store/AuthContext";
import { useNavigate } from "react-router-dom";

function SignOutButton() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logouthandler = () => {
    authContext.logout();
    navigate("/");
  };
  return (
    <div className="ml-2">
      <button
        className="bg-blue-300 rounded-3xl w-16 text-black p-2 mt-2 mr-2"
        onClick={logouthandler}
      >
        Logout
      </button>
    </div>
  );
}

export default SignOutButton;
