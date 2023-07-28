import { useContext, useRef } from "react";
import LoginAvatar from "./LoginAvatar";
import ShareButton from "./ShareButton";
import AuthContext from "../Store/AuthContext";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import SheetContainer from "../Table/containers/SheetsContainer";

export default function WorkspacePage() {
  const authContext = useContext(AuthContext);
  const inputRef = useRef();

  const saveHandler = () => {
    const sheetName = inputRef.current.value;
    fetch("https://googlesheets-backend.onrender.com/sheet", {
      method: "POST",
      body: JSON.stringify({
        name: sheetName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Name saved");
        }
      })
      .catch((err) => {
        alert("something went wrong!");
      });
  };

  return (
    <div>
      <navbar className="flex fixed top-0 x-overflow-hidden z-10 p-4 border-b-2 bg-white border-gray-200 w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png"
          alt="logo"
          className="lg:w-10 w-8 mr-2"
        />
        <div className="flex flex-col">
          <input
            name="sheetName"
            type="text"
            ref={inputRef}
            className="placeholder:text-md placeholder:text-black text-md lg:text-xl placeholder:border-0"
            placeholder="Untitled spreadsheet"
          />
          <div>
            {authContext.isLoggedIn && (
              <button
                className="bg-gray-200 mr-2 rounded-lg p-1"
                onClick={saveHandler}
              >
                Save-Name
              </button>
            )}
          </div>
        </div>
        {authContext.isLoggedIn ? <ShareButton /> : <SignInButton />}
        {authContext.isLoggedIn && <SignOutButton />}
        {authContext.isLoggedIn && <LoginAvatar />}
      </navbar>
      <SheetContainer />
    </div>
  );
}
