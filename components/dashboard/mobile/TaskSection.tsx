import { useState } from "react";
import LineItem from "./LineItem";
import { RxListBullet, RxPlus } from "react-icons/rx";

export default function TaskSection() {
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalTasks, setTotalTasks] = useState(2);

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
