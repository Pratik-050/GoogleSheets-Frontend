import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData.email, formData.password);
  };
  return (
    <>
      <div className="flex flex-col h-screen items-center  bg-green-300 justify-center ">
        <form
          onSubmit={submitHandler}
          className="border border-black bg-white rounded-lg p-4"
        >
          <h1 className="font-bold text-center text-2xl">Sign-In</h1>

          <h1 className="font-semibold mt-4">Email address</h1>
          <input
            type="text"
            name="email"
            placeholder="name@gmail.com"
            className="border border-gray-400 w-full rounded-lg p-2 my-4 "
            value={formData.email}
            onChange={changeHandler}
          />
          <h1 className="font-semibold">Password</h1>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="border border-gray-400 w-full rounded-lg p-2 my-4 mx-auto"
            value={formData.password}
            onChange={changeHandler}
          />
          <button
            type="submit"
            className=" border-b-8 border-blue-600 bg-blue-500 text-center text-white font-bold p-2 my-4 w-full rounded-xl hover:bg-blue-600 hover:duration-200"
          >
            SIGN-UP
          </button>
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
        </form>
      </div>
    </>
  );
}
