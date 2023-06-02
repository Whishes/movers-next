"use client";

import { Dispatch, SetStateAction, useState } from "react";
import DashboardSelection from "./Selection";

export default function MobileDashboard() {
  const [selection, setSelection] = useState("tasks");
  // state for tasks
  // state for costs

  // get data for user and filter into each state

  return (
    <div className=" bg-gray-100 rounded-lg m-4 w-full min-h-full shadow flex flex-col">
      <DashboardSelection selection={selection} setSelection={setSelection} />

      {selection === "tasks" ? <TaskSection /> : <p>Costs</p>}
    </div>
  );
}

import {
  RxCheck,
  RxCross1,
  RxListBullet,
  RxPencil1,
  RxPlus,
} from "react-icons/rx";
import { CgUndo } from "react-icons/cg";
import LineButton from "../../ui/LineButton";

export function TaskSection() {
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  return (
    <section className="m-2 flex-1 flex-grow flex flex-col">
      {/* details */}
      <div className="flex items-center justify-evenly m-3">
        <button className="h-8 w-8 rounded hover:bg-slate-200">
          <RxListBullet size={30} />
        </button>
        <button className="outline h-8 w-8">2</button>
        <button className="h-8 w-8 rounded hover:bg-slate-200">
          <RxPlus size={30} />
        </button>
      </div>

      <div className="flex justify-between mb-2">
        <p className="font-medium">
          Total Tasks: <span className="font-thin">{totalTasks}</span>
        </p>
        <p className="font-medium">
          Total Complete: <span className="font-thin">{totalCompleted}</span>
        </p>
      </div>

      {/* all items */}
      <div className="overflow-y-scroll flex-1 flex-grow">
        {/* LineItems will be mapped based on props data */}
        <LineItem
          totalCompleted={totalCompleted}
          setTotalCompleted={setTotalCompleted}
          totalTasks={totalTasks}
          setTotalTasks={setTotalTasks}
        />
        <LineItem
          totalCompleted={totalCompleted}
          setTotalCompleted={setTotalCompleted}
          totalTasks={totalTasks}
          setTotalTasks={setTotalTasks}
        />
      </div>
    </section>
  );
}

export function LineItem({
  totalCompleted,
  setTotalCompleted,
  totalTasks,
  setTotalTasks,
}: {
  totalCompleted: number;
  setTotalCompleted: Dispatch<SetStateAction<number>>;
  totalTasks: number;
  setTotalTasks: Dispatch<SetStateAction<number>>;
}) {
  const [complete, setComplete] = useState(false);

  function testFunction() {
    console.log("test");
  }

  const markComplete = () => {
    setComplete(true);
    setTotalCompleted(totalCompleted + 1);
  };

  const undoComplete = () => {
    setComplete(false);
    setTotalCompleted(totalCompleted - 1);
  };

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

        <LineButton>
          <RxPencil1 size={30} className="text-blue-500" />
        </LineButton>
        <LineButton disabled={!complete}>
          <RxCross1
            size={30}
            className={`${complete ? "text-red-500" : "text-gray-300"}`}
          />
        </LineButton>
      </div>
    </div>
  );
}
