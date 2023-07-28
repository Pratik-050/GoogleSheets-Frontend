import ButtonGo from "./ButtonGo";
import ButtonTry from "./ButtonTry";

export default function Login() {
  return (
    <>
      <navbar className="flex p-4 border-b-2 border-gray-200 w-screen ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png"
          alt="logo"
          className="w-6 mr-2"
        />
        <h1 className="font-bold text-2xl text-gray-600">
          GLUG <span className="text-gray-500 font-normal">Sheets</span>
        </h1>
      </navbar>

      <body className="p-4 max-w-2xl md:max-w-[80%] lg:mt-24 mx-auto flex flex-col md:flex-row">
        <div className="text-center">
          <h5 className="font-semi-bold text-4xl text-center max-w-sm mt-12 mx-auto md:text-6xl md:max-w-lg ">
            Make data-driven dicisions, in GLUG Sheets
          </h5>
          <p className="text-gray-500 text-center mx-auto mt-4 max-w-sm md:text-left md:text-lg">
            Create and collaborate on online spreadsheets in real-time and from
            any device.
          </p>
          <div className="flex flex-col md:flex-row ">
            <ButtonTry />
            <ButtonGo />
          </div>
          <p className="text-gray-500 mx-auto mt-6">Don't have an account?</p>
          <a className="text-blue-600 mx-auto mt-6" href="/signup">
            Sign up here
          </a>
        </div>
        <img
          src="https://lh3.googleusercontent.com/PHjvBmaCx9FId_EWB2JnyIuhahnRd_RpjaFKytmrYG2uOdih5WgqBIwtc6jHo34nk5vomdZkuGuJhLMiKvJpmd9gLDZqaB_I4lRUiZXNYAZKHqlDVH1j=s0"
          alt="spreadsheet"
          className="mt-16 md:max-w-2xl md:ml-auto"
        />
      </body>
    </>
  );
}
