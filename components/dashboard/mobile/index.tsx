"use client";

import { useState } from "react";
import DashboardSelection from "./DashTabs";
import TaskSection from "./TaskSection";

export default function MobileDashboard() {
  const [selection, setSelection] = useState("tasks");
  // state for tasks
  // state for costs

  // get data for user and filter into each state

  return (
    <div className=" bg-gray-100 rounded-lg m-4 w-full min-h-full shadow flex flex-col md:mx-auto md:w-1/2">
      <DashboardSelection selection={selection} setSelection={setSelection} />

      {selection === "tasks" ? <TaskSection /> : <p>Costs</p>}
    </div>
  );
}
