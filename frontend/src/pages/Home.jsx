import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[url('./bg-image.jpg')] bg-cover bg-center h-screen pt-8 w-full flex justify-between flex-col bg-red-400">
      <img src="./white-logo.png" alt="" className="w-16 ml-8" />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl font-bold">Get started with uber</h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white rounded py-3 mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Home;
