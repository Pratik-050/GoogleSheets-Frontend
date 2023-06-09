import "./App.css";
import Login from "./Login/Login";
import SignIn from "./Signin/SignIn";
import { Route, Routes } from "react-router-dom";
import WorkspacePage from "./Workspace/WorkspacePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/workspace" element={<WorkspacePage />} exact />
        <Route path="/signup" element={<SignIn />} exact />
      </Routes>
    </div>
  );
}
