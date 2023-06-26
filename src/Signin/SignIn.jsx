import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

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
        Navigate("/workspace");
      })
      .catch((err) => {
        alert("authentication failed!!!");
      });
  };
  return (
    <>
      <div className="flex flex-col h-screen items-center  bg-white justify-center ">
        <form
          onSubmit={submitHandler}
          className="shadow-2xl bg-white rounded-lg p-4"
        >
          <h1 className="font-bold text-center text-2xl">
            {!createAccount ? "Sign-In" : "Sign-Up"}
          </h1>

          <h1 className="font-semibold mt-4">Email address</h1>
          <input
            type="text"
            name="email"
            placeholder="name@gmail.com"
            className="border border-gray-400 w-full rounded-lg p-2 my-4 "
            required
            ref={emailInputRef}
          />
          <h1 className="font-semibold">Password</h1>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-400 w-full rounded-lg p-2 my-4 mx-auto"
            required
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
          <button className="border border-gray-400 font-bold text-center py-4 my-4 w-full rounded-xl">
            <span className="flex justify-center">
              <img
                src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_google_icon_143197.png"
                alt="G"
                className="w-6 mr-2"
              />
              Authorize with Google
            </span>
          </button>
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
      </div>
    </>
  );
}
