import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {

	const [userData,setUserData] = useContext(AuthContext);
  return (
		<div className="bg-[#1c1c1c] p-5  rounded mt-5 h-60 ">
			<div className="bg-red-400 py-2 px-4 mb-2  flex justify-between rounded">
				<h2 className="w-1/5 ">Employee Name</h2>
				<h3 className="w-1/5 ">New Task</h3>
				<h5 className="w-1/5 ">Active Task</h5>
				<h5 className="w-1/5 ">Completed</h5>
				<h5 className="w-1/5 ">Failed</h5>
			</div>
			<div className='h-[80%] overflow-auto'>
			{userData.map((e,idx) => {
				return (
					<div className="border-2 border-emerald-500 mb-2  py-2 px-4   flex justify-between rounded" key={idx}>
						<h2 className="w-1/5 text-white">{e.firstName}</h2>
						<h3 className="w-1/5 text-blue-600">{e.taskStats.newTasksCount}</h3>
						<h5 className="w-1/5 text-yellow-400">{e.taskStats.activeTasksCount}</h5>
						<h5 className="w-1/5 text-white">{e.taskStats.completedTasksCount}</h5>
						<h5 className="w-1/5 text-red-600">{e.taskStats.failedTasksCount}</h5>
					</div>
				);
			})}
		  </div>
		</div>
	);
}

export default AllTask
