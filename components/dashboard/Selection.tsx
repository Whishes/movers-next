import { Dispatch, SetStateAction } from "react";

export default function DashboardSelection({
  selection,
  setSelection,
}: {
  selection: string;
  setSelection: Dispatch<SetStateAction<string>>;
}) {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setSelection(e.target.value);
  };

  return (
    <div className="h-16 flex w-full justify-evenly items-center">
      <label
        className={`cursor-pointer h-full w-full flex items-center justify-center hover:bg-slate-200 rounded-tl-lg ${
          selection === "tasks" && "border-b-2 border-green-400"
        }`}
      >
        <input
          type="radio"
          checked={selection === "tasks"}
          name="selection"
          value={"tasks"}
          onChange={handleRadioChange}
          className="hidden"
        ></input>
        Tasks
      </label>
      <label
        className={`cursor-pointer h-full w-full flex items-center justify-center hover:bg-slate-200 rounded-tr-lg ${
          selection === "costs" && "border-b-2 border-green-400"
        }`}
      >
        <input
          type="radio"
          name="selection"
          value={"costs"}
          checked={selection === "costs"}
          onChange={handleRadioChange}
          className="hidden"
        ></input>
        Costs
      </label>
    </div>
  );
}
