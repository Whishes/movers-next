"use client";

import { useState } from "react";
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
  RxFileText,
  RxListBullet,
  RxPencil1,
  RxPlus,
} from "react-icons/rx";
import LineButton from "../../ui/LineButton";

export function TaskSection() {
  return (
    <section className="m-2 flex-1 flex-grow flex flex-col">
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
          Total Tasks: <span className="font-thin">[1]</span>
        </p>
        <p className="font-medium">
          Total Complete: <span className="font-thin">[0]</span>
        </p>
      </div>

      <div className="overflow-y-scroll flex-1 flex-grow">
        {/* LineItems will be mapped based on props data */}
        <LineItem />
        <LineItem />
      </div>
    </section>
  );
}

export function LineItem() {
  function testFunction() {
    console.log("test");
  }

  return (
    <div className="bg-yellow-300 rounded min-h-12 flex shadow mb-3">
      <div className="w-[70%] pl-1">
        {/* make sure to have a max length on the task strings */}
        <p>[Task]</p>
        <p className=" font-light text-sm">Due [29 May]</p>
      </div>
      <div className="w-[30%] flex justify-evenly items-center">
        <LineButton func={testFunction}>
          <RxCheck size={30} className="text-green-500" />
        </LineButton>
        <LineButton func={testFunction}>
          <RxPencil1 size={30} className="text-blue-500" />
        </LineButton>
        <LineButton func={testFunction}>
          <RxCross1 size={30} className="text-red-500" />
        </LineButton>
      </div>
    </div>
  );
}
