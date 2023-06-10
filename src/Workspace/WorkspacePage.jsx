import FuncButton from "./FuncButton";
import LoginAvatar from "./LoginAvatar";
import ShareButton from "./ShareButton";
import Table from "./Table";

export default function WorkspacePage() {
  return (
    <div>
      <navbar className="flex fixed top-0 z-10 p-4 border-b-4 bg-white border-gray-200 w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png"
          alt="logo"
          className="w-10 mr-2"
        />
        <div className="flex flex-col">
          <input
            name="sheetName"
            type="text"
            className="placeholder:text-md placeholder:text-black text-xl placeholder:border-0"
            placeholder="Untitled spreadsheet"
          />
          <div>
            <FuncButton />
          </div>
        </div>
        <ShareButton />
        <LoginAvatar />
      </navbar>
      <Table />
    </div>
  );
}
