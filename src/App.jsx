import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import EmployeeProfile from "./components/EmployeeProfile";
import AdminDashboard from "./components/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
	const [userData,setUserData] = useContext(AuthContext);
	const [user, setUser] = useState(null);
	const [loggedinUserdata, setLoggedinUserdata] = useState(null);

	useEffect(() => {
		const loggedInUser = localStorage.getItem("loggedInUser");
		if (loggedInUser) {
			const userData = JSON.parse(loggedInUser);
			setUser(userData.role);
			if (userData.role === "employee") {
				setLoggedinUserdata(userData.data);
			}
		}
	}, []);

	const handleLogin = (email, password) => {
		if (email=="admin@me.com" && password=="123") {
			localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
			setUser("admin"); // Set correctly
		} else if (userData) {
			const employee = userData.find(
				(e) => e.email === email && e.password === password
			);
			if (employee) {
				setUser("employee");
				setLoggedinUserdata(employee);
				localStorage.setItem(
					"loggedInUser",
					JSON.stringify({ role: "employee", data: employee })
				);
			} else {
				alert("Invalid credentials");
			}
		}
	};

	return (
		<div className="bg-black">
			{!user ? (
				<Login handlelogin={handleLogin} />
			) : user === "admin" ? (
				<AdminDashboard />
			) : user === "employee" ? (
				<EmployeeProfile data={loggedinUserdata} />
			) : null}
		</div>
	);
}

export default App;
