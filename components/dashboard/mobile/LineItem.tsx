import { RxCheck, RxCross1, RxPencil1 } from "react-icons/rx";
import { CgUndo } from "react-icons/cg";
import LineButton from "../../ui/LineButton";
import { Dispatch, SetStateAction, useState } from "react";
import LineForm from "./LineForm";

interface LineItemProps {
  totalCompleted: number;
  setTotalCompleted: Dispatch<SetStateAction<number>>;
  totalTasks: number;
  setTotalTasks: Dispatch<SetStateAction<number>>;
}

export default function LineItem({
  totalCompleted,
  setTotalCompleted,
  totalTasks,
  setTotalTasks,
}: LineItemProps) {
  const [complete, setComplete] = useState(false);
  const [edit, setEdit] = useState(false);

  const markComplete = () => {
    setComplete(true);
    setTotalCompleted(totalCompleted + 1);
  };

  const undoComplete = () => {
    setComplete(false);
    setTotalCompleted(totalCompleted - 1);
  };

  const deleteTodo = () => {
    const confirm = window.confirm(
      `Are you sure that you want to delete this item?`
    );

    if (!confirm) return;

    setTotalTasks(totalTasks - 1);
    setTotalCompleted(totalCompleted - 1);
  };

  if (edit)
    return (
      <LineForm
        taskName={"Example"}
        taskDate="2023-05-29T00:00:00.000Z"
        setEdit={setEdit}
      />
    );

  return (
    <div
      className={`${
        complete ? "bg-green-200" : "bg-red-300"
      } rounded min-h-12 flex shadow mb-3`}
    >
      <div className="w-[70%] pl-1">
        {/* make sure to have a max length on the task strings */}
        <p>[Task]</p>
        <p className=" font-light text-sm">Due [29 May]</p>
      </div>
      <div className="w-[30%] flex justify-evenly items-center">
        {!complete ? (
          <LineButton func={markComplete}>
            <RxCheck size={30} className="text-green-500" />
          </LineButton>
        ) : (
          <LineButton func={undoComplete}>
            <CgUndo size={30} className="text-yellow-300" />
          </LineButton>
        )}

        <LineButton disabled={complete} func={() => setEdit(true)}>
          <RxPencil1
            size={30}
            className={`${!complete ? "text-blue-500" : "text-gray-300"}`}
          />
        </LineButton>
        <LineButton disabled={!complete} func={deleteTodo}>
          <RxCross1
            size={30}
            className={`${complete ? "text-red-500" : "text-gray-300"}`}
          />
        </LineButton>
      </div>
    </div>
  );
}
