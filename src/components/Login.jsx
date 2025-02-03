import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");

  const submitHandler=(e)=>
  {
    e.preventDefault();
    console.log("form submitted Successfully");

    if (email === "" || password === "")
    {
      alert("Please fill all the fields");
    }

    setEmail("");
    setPassword("");
  }

  return (
		<div className="flex  h-screen w-screen justify-center items-center ">
			<div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
            onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
					<input
						type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
						className="outline-none bg-transparent border-2 text-white border-emerald-600 py-3  px-5 rounded-full text-xl placeholder-gray-300"
						placeholder="Enter Your Email"
						required
					/>
					<input
						type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
						className="outline-none bg-transparent border-2 text-white border-emerald-600 py-3 mt-3  px-5 rounded-full text-xl placeholder-gray-300"
						placeholder="Enter Your Password"
						required
					/>
					<button
						className="outline-none bg-emerald-600  py-3  px-5 rounded-full w-full mt-7 text-xl text-white placeholder-gray-300 "
					>Log In</button>
				</form>
			</div>
		</div>
	);
}

export default Login
