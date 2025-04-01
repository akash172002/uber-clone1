import { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between ">
      <div>
        <form onSubmit={submitHandler}>
          <img src="./uberDriver.png" alt="" className="w-16 mb-6 " />

          <h3 className="text-lg mb-2 font-medium">
            What's our Captain's name
          </h3>

          <div className="flex gap-4 mb-5">
            <input
              className="bg-gray-200  rounded px-4 py-2 border w-1/2  text-base placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name..."
            />

            <input
              className="bg-gray-200 w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name..."
            />
          </div>

          <h3 className="text-lg mb-2 font-medium">What's your email</h3>

          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />

          <h3 className="text-lg mb-2 font-medium">Enter password</h3>

          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />

          <button className="bg-black font-semibold text-[#fff] mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center">
          Allready have a account?{"  "}
          <Link to="/captain-login" className=" text-blue-600 ">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
