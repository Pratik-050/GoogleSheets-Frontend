import { atom } from "recoil";

export const SheetSizeState = atom({
  key: "SheetSizeState",
  default: {
    width: 2600,
    height: 800,
  },
});
