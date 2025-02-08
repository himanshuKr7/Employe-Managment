import React from 'react'
import TaskList from '../TaskList/TaskList';
import Header from './Header';
import TaskNumber from '../other/TaskNumber';

const EmployeeProfile = ({data}) => {
	console.log(data)
  return (
		<div className="h-screen  w-screen p-10 bg-black">
			{/* Header */}
			<Header data={data}/>
          {/* Task No. */}
			<TaskNumber data={data}/>
			{/* Task List */}
          <TaskList data={data}/>
		</div>
	);
}

export default EmployeeProfile
