import React from "react";
import { useNavigate } from "react-router-dom";

function SignInButton() {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/signup");
  };
  return (
    <div className="ml-auto">
      <button
        className="bg-blue-300 rounded-3xl w-24 text-black p-2 mt-2"
        onClick={navigationHandler}
      >
        Sign-In
      </button>
    </div>
  );
}

export default SignInButton;
