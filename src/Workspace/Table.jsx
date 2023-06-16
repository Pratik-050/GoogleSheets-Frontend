import { useState } from "react";
import { Spreadsheet } from "react-spreadsheet";

export default function Table() {
  const [data, setData] = useState(
    Array(26)
      .fill(0)
      .map((row, index) => new Array(26).fill("Row" + (index + 1)))
  );
  return (
    <div className="mt-24">
      <Spreadsheet data={data} onChange={setData} />
    </div>
  );
}
