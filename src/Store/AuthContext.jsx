import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return storedToken;
};

const retrieveStoredEmail = () => {
  const storedToken = localStorage.getItem("email");
  return storedToken;
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  const userName = retrieveStoredEmail();
  let initialUserName = "";
  let initialToken = null;
  if (tokenData) {
    initialToken = tokenData;
  }
  if (userName) {
    initialUserName = userName;
  }
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialUserName);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("profilePic");
    let url = "https://googlesheets-backend.onrender.com/logout";
    fetch(url, {
      method: "GET",
    })
      .then((data) => {
        setTimeout(() => {
          toast.success("logged-out successfully!");
        }, 1000);
      })
      .catch(() => {
        alert("user not logged out");
      });
  };

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: email,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
