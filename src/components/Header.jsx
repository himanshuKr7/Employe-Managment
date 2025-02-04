import React from 'react'

const Header = () => {
  return (
		<div className="flex items-center justify-between text-white ">
			<div>
				<h1 className="text-2xl font-bold">Hello </h1>
				<span className="text-3xl font-medium">Himanshu 👋</span>
			</div>
			<div className="text-2xl font-bold bg-red-600 p-3 rounded-md">
				{" "}
				Log Out
			</div>
		</div>
	);
}

export default Header
