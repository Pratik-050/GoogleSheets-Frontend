import { useState } from "react";

export default function FuncButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="hover:bg-gray-300 bg-gray-200 p-1 rounded-xl"
      >
        fx
      </button>

      <div
        hidden={isMenuOpen}
        className="absolute top-8 inset-x-0 left-0 w-32 z-10 shadow-xl bg-white"
      >
        <ul className="p-2">
          <li value={1}>sum</li>
          <li value={2}>sum</li>
          <li value={3}>sum</li>
          <li value={4}>sum</li>
        </ul>
      </div>
    </div>
  );
}
