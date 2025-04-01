import { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email,
      password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <form onSubmit={submitHandler}>
          <img src="./uberDriver.png" alt="" className="w-20 mb-2 " />

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
          Join a fleet?{" "}
          <Link to="/captain-signup" className=" text-blue-600 ">
            Register as a captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] font-semibold text-[#fff] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base flex items-center justify-center"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
