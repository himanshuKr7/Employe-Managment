import React from 'react'
import TaskList from '../TaskList/TaskList';
import Header from './Header';
import TaskNumber from '../other/TaskNumber';

const EmployeeProfile = () => {
  return (
		<div className="h-screen p-10">
			{/* Header */}
			<Header/>
          {/* Task No. */}
			<TaskNumber/>
          <TaskList/>
		</div>
	);
}

export default EmployeeProfile
