import React from 'react'

const CreateTask = () => {
  return (
		<div className="p-5 bg-[#1c1c1c] mt-7 rounded">
			<form className="flex flex-wrap w-full items-start justify-between">
				<div className="w-1/2">
					<div>
						<h3 className="text-xl text-gray-300 mb-1">Task Title</h3>
						<input
							className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px]"
							type="text"
							placeholder="Enter Title"
						/>
					</div>
					<div>
						<h3 className="text-xl text-gray-300 mb-1">Date</h3>
						<input
							className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px]"
							type="date"
							placeholder="Enter Date"
						/>
					</div>
					<div>
						<h3 className="text-xl text-gray-300 mb-1">Asign to</h3>
						<input
							className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px]"
							type="text"
							placeholder="Enter Employee Name"
						/>
					</div>
					<div>
						<h3 className="text-xl text-gray-300 mb-1">Category</h3>
						<input
							className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px]"
							type="text"
							placeholder="Enter category Design,Dev"
						/>
					</div>
				</div>
              <div className='w-2/5 flex flex-col items-start'>
                  <h3 className='text-xl text-gray-300 mb-1'>Description</h3>
                  <textarea className='w-full h-44 text-sm py-2 rounded outline-none bg- transparent border-[1px] border-gray-400' name='' id=""></textarea>
                  <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-xl mt-4 w-full">Create Task</button>
                </div>
			</form>
		</div>
	);
}

export default CreateTask
