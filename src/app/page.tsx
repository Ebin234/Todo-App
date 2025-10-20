import { FaCheckCircle, FaTrash } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-purple-950 p-2 min-h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-[90%] bg-slate-900 p-4 rounded-md shadow-md">
        <h1 className="text-center text-white text-2xl">Todos for the day</h1>
        <div className="flex gap-2 justify-center my-8">
          <input
            type="text"
            placeholder="Add Todo"
            className="flex-3 border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md focus:border-white"
          />
          <button className="flex-1 bg-purple-800 cursor-pointer rounded-md text-sm hover:bg-purple-900 text-white">
            Add Todo
          </button>
        </div>
        <div>
          <h1 className="text-center text-white text-xl">Todos</h1>
          <div className="bg-purple-800 p-2 rounded-md flex justify-between items-center my-4 text-white">
            <p>Go the market</p>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaCheckCircle className="hover:text-gray-200"/>
              <FaTrash className="hover:text-gray-200"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
