import React from "react";

const AcceptTask = ({ data }) => {
    console.log();
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.tasks[0].category}</h3>
        <h4 className="text-sm">{data.tasks[2].date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.tasks[0].title}</h2>
      <p className="text-sm mt-2">{data.tasks[1].description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
