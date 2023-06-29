import React from "react";

function GoogleButton() {
  return (
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
  );
}

export default GoogleButton;
