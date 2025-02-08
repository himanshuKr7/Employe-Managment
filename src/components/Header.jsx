import React, { useEffect, useState } from "react";


const Header = ({ data }) => {
	const [username, setUsername] = useState("Admin"); 

	useEffect(() => {
		if (data) {
			setUsername(data.firstName);
		}
	}, [data]);

const logoutuser=()=>
{
	localStorage.setItem("loggedInUser", '');
	window.location.reload();
}


	return (
		<div className="flex items-center justify-between text-white ">
			<div>
				<h1 className="text-2xl font-bold">Hello </h1>
				<span className="text-3xl font-medium">{username} 👋</span>
			</div>
			<div onClick={logoutuser}
				className="text-2xl font-bold bg-red-600 p-3 rounded-md">
				Log Out
			</div>
		</div>
	);
};

export default Header;
