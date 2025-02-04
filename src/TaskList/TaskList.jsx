import React from 'react'

const TaskList = () => {
  return (
		<div
			id="tasklist"
			className="h-[55%] w-full flex  overflow-x-auto items-center justify-start text-white  gap-5 flex-nowrap  mt-10">
			<div className=" flex-shrink-0 h-full w-[300px] p-7 bg-yellow-400 rounded-xl">
				<div className="flex justify-between items-center">
					<h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
					<h4>04 Feb 2024</h4>
				</div>
				<h2 className="mt-5 text-xl font-semibold">Make a video</h2>
				<p className="text-sm mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					magnam quidem rem nam nulla numquam.
				</p>
			</div>
			<div className=" flex-shrink-0 h-full w-[300px] p-7 bg-green-400 rounded-xl">
				<div className="flex justify-between items-center">
					<h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
					<h4>04 Feb 2024</h4>
				</div>
				<h2 className="mt-5 text-xl font-semibold">Make a video</h2>
				<p className="text-sm mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					magnam quidem rem nam nulla numquam.
				</p>
			</div>
			<div className=" flex-shrink-0 h-full w-[300px] p-7 bg-red-400 rounded-xl">
				<div className="flex justify-between items-center">
					<h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
					<h4>04 Feb 2024</h4>
				</div>
				<h2 className="mt-5 text-xl font-semibold">Make a video</h2>
				<p className="text-sm mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					magnam quidem rem nam nulla numquam.
				</p>
			</div>
			<div className=" flex-shrink-0 h-full w-[300px] p-7 bg-blue-400 rounded-xl">
				<div className="flex justify-between items-center">
					<h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
					<h4>04 Feb 2024</h4>
				</div>
				<h2 className="mt-5 text-xl font-semibold">Make a video</h2>
				<p className="text-sm mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					magnam quidem rem nam nulla numquam.
				</p>
			</div>
			<div className=" flex-shrink-0 h-full w-[300px] p-7 bg-purple-400 rounded-xl">
				<div className="flex justify-between items-center">
					<h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
					<h4>04 Feb 2024</h4>
				</div>
				<h2 className="mt-5 text-xl font-semibold">Make a video</h2>
				<p className="text-sm mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					magnam quidem rem nam nulla numquam.
				</p>
			</div>
		</div>
	);
}

export default TaskList
