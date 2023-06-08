import LineButton from "@/components/ui/LineButton";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { RxCheck, RxCross1 } from "react-icons/rx";

export interface LineFormProps {
  taskName: string;
  taskDate: string;
  setEdit: Dispatch<SetStateAction<boolean>>;
}

const LineForm = ({ taskName, taskDate, setEdit }: LineFormProps) => {
  const [formName, setFormName] = useState(taskName);
  const [formDate, setFormDate] = useState(taskDate.slice(0, 10)); // slices date from ISO format

  const handleClose = () => {
    const confirm = window.confirm("Are you sure you want to stop editing?");

    if (!confirm) return;

    setEdit(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const date = new Date(formDate);
    const formattedDate = date.toISOString();

    // if no changes just cancel the editing
    if (formName === taskName && taskDate === formattedDate) {
      return setEdit(false);
    }

    const formattedName = formName.trim();

    // api request etc here
    try {
      console.log({ formattedName, formattedDate });
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`bg-blue-500 rounded min-h-12 flex shadow mb-3`}>
        <div className="w-[70%] pl-1">
          {/* make sure to have a max length on the task strings */}
          <input
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            className="bg-transparent w-full"
          ></input>
          <input
            type="date"
            className="font-light text-sm w-32 bg-transparent"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
          ></input>
        </div>
        <div className="w-[30%] flex justify-evenly items-center">
          <LineButton>
            <RxCheck size={30} className="text-green-500" />
          </LineButton>
          <LineButton func={handleClose}>
            <RxCross1 size={30} className="text-red-500" />
          </LineButton>
        </div>
      </div>
    </form>
  );
};

export default LineForm;
