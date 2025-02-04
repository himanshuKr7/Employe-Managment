import React from 'react'

const TaskNumber = () => {
  return (
		<div className="mt-10 flex gap-5 ">
			<div className="w-[45%] text-white bg-red-400 items-center py-6 px-10 rounded-xl">
				<h1 className="text-3xl font-semibold">0</h1>
				<h3 className="text-xl font-bold">New Task</h3>
			</div>
			<div className="w-[45%] text-white bg-blue-400 items-center py-6 px-10 rounded-xl">
				<h1 className="text-3xl font-semibold">0</h1>
				<h3 className="text-xl font-bold">New Task</h3>
			</div>
			<div className="w-[45%] text-white bg-green-400 items-center py-6 px-10 rounded-xl">
				<h1 className="text-3xl font-semibold">0</h1>
				<h3 className="text-xl font-bold">New Task</h3>
			</div>
			<div className="w-[45%] text-white bg-yellow-400 items-center py-6 px-10 rounded-xl">
				<h1 className="text-3xl font-semibold">0</h1>
				<h3 className="text-xl font-bold">New Task</h3>
			</div>
		</div>
	);
}

export default TaskNumber
