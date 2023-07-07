import "./App.css";
import Login from "./Login/Login";
import SignIn from "./Signin/SignIn";
import { Route, Routes, Navigate } from "react-router-dom";
import WorkspacePage from "./Workspace/WorkspacePage";
import { useContext } from "react";
import AuthContext from "./Store/AuthContext";
import ProfilePage from "./ProfilePage/ProfilePage";

export default function App() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/workspace" element={<WorkspacePage />} exact />
        {authContext.isLoggedIn && (
          <Route path="/profile" element={<ProfilePage />} exact />
        )}
        {!authContext.isLoggedIn && (
          <Route path="/signup" element={<SignIn />} exact />
        )}
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}
