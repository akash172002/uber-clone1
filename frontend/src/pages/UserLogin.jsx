import { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <form onSubmit={submitHandler}>
          <img src="./logo.png" alt="" className="w-16 mb-10 " />

          <h3 className="text-lg mb-2 font-medium">What's your email</h3>

          <input
            className="bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-medium">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />

          <button className="bg-[#111] font-semibold text-[#fff] mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center">
          New Here?{" "}
          <Link to="/signup" className=" text-blue-600 ">
            Create New Account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] font-semibold text-[#fff] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base flex items-center justify-center"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
