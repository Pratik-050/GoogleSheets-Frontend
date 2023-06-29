import { useContext, useState } from "react";
import FuncButton from "./FuncButton";
import LoginAvatar from "./LoginAvatar";
import ShareButton from "./ShareButton";
import AuthContext from "../Store/AuthContext";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import ColourButton from "./ColourButton";
import SheetContainer from "../Table/containers/SheetsContainer";

export default function WorkspacePage() {
  const authContext = useContext(AuthContext);
  const [cellColor, setCellColor] = useState("white");

  const handleColorChange = (selectedColor) => {
    setCellColor(selectedColor);
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
            className="placeholder:text-md placeholder:text-black text-md lg:text-xl placeholder:border-0"
            placeholder="Untitled spreadsheet"
          />
          <div>
            <FuncButton />
            <ColourButton onColourChange={handleColorChange} />
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
