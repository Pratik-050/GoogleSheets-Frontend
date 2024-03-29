import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import GoogleButton from "./GoogleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const Navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const [createAccount, setCreateAccount] = useState(false);
  const createAccountHandler = () => {
    setCreateAccount((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (!createAccount) {
      url = "https://googlesheets-backend.onrender.com/login";
    } else {
      url = "https://googlesheets-backend.onrender.com/register ";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        user: enteredEmail,
        pwd: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authContext.login(data.idToken, data.email);
        Navigate("/profile");
        setTimeout(() => {
          toast.success("logged-in successfully!");
        }, 1000);
      })
      .catch((err) => {
        toast.error("wrong password or username!");
      });
  };
  return (
    <>
      <div className="flex flex-col h-screen lg:w-full w-[90%] mx-auto items-center bg-white justify-center ">
        <form
          onSubmit={submitHandler}
          className=" shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white rounded-lg p-4"
        >
          <h1 className="font-bold text-center text-2xl">
            {!createAccount ? "Sign-In" : "Sign-Up"}
          </h1>

          <h1 className="font-semibold mt-4">Email address</h1>
          <input
            type="email"
            name="email"
            placeholder="name@gmail.com"
            className="border border-gray-400 w-full rounded-lg p-2 my-4 "
            ref={emailInputRef}
          />
          <h1 className="font-semibold">Password</h1>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-400 w-full rounded-lg p-2 my-4 mx-auto"
            ref={passwordInputRef}
          />
          {isLoading ? (
            <p className="text-center w-full text-gray-400">Loading...</p>
          ) : (
            <button
              type="submit"
              className=" border-b-8 border-blue-600 bg-blue-500 text-center text-white font-bold p-2 my-4 w-full rounded-xl hover:bg-blue-600 hover:duration-200"
            >
              {!createAccount ? "SIGN-IN" : "Create Account"}
            </button>
          )}
          <h1 className="font-semibold text-center text-gray-300 my-4">
            _______OR_______
          </h1>
          <GoogleButton />
          <button
            type="button"
            onClick={createAccountHandler}
            className="font-semibold text-center w-full text-gray-500 my-4"
          >
            {!createAccount
              ? "Create new account"
              : "Login with existing account"}
          </button>
        </form>
        <ToastContainer />;
      </div>
    </>
  );
}
