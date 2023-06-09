import { useNavigate } from "react-router-dom";

export default function ButtonTry() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/workspace";
    navigate(path);
  };
  return (
    <button
      onClick={routeChange}
      className="bg-blue-600 p-2 text-white font-bold max-w-sm mx-auto mt-16 rounded-md px-4"
    >
      Try Sheets
    </button>
  );
}
