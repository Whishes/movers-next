"use client";

import { useState } from "react";
import DashboardSelection from "./Selection";

export default function MobileDashboard() {
  const [selection, setSelection] = useState("tasks");

  return (
    <div className=" bg-gray-100 rounded-lg m-4 w-full min-h-full shadow">
      <DashboardSelection selection={selection} setSelection={setSelection} />

      {selection === "tasks" ? <p>Tasks</p> : <p>Costs</p>}
    </div>
  );
}
