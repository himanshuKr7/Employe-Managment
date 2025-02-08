import React from 'react'
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import AcceptTask from './AcceptTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
		<div
			id="tasklist"
			className="h-[55%] w-full flex  overflow-x-auto items-center justify-start text-white  gap-5 flex-nowrap  mt-10">
			{data.tasks.map((e,idx)=>
			{
                if(e.active)
				{
					return <AcceptTask key={idx} data={e} />
				}
				if (e.newTask)
				{
					return <NewTask key={idx}  data={e} />
				}
				if (e.completed) {
					return <CompleteTask key={idx} data={e} />;
				}
				if (e.failed) {
					return <FailedTask key={idx} data={e} />;
				}
			})}
		</div>
	);
}

export default TaskList
