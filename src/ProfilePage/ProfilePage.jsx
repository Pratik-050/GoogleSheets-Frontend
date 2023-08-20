import React, { useContext } from "react";
import Avatar from "react-avatar";
import AuthContext from "../Store/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfilePage() {
  const authContext = useContext(AuthContext);
  const pic = localStorage.getItem("profilePic");
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/workspace";
    navigate(path);
  };
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <h1 className="font-bold text-3xl text-white bg-blue-500 p-4 rounded-xl mt-6">
        Welcome to Sheets
      </h1>
      <div className="mt-36">
        <Avatar
          src={pic}
          className="shadow-xl"
          name={authContext.email}
          round={true}
          size="100"
          color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
        />
      </div>
      <button
        className="mt-6 bg-blue-500 rounded-lg p-2 hover:text-black text-white font-bold"
        onClick={routeChange}
      >
        go to workspace
      </button>
      <ToastContainer />
    </div>
  );
}

export default ProfilePage;
