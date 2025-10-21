"use client";

import { useState } from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

type item = {
  data: string;
  id: string;
  completed: boolean;
};

export default function Home() {
  const [inputData, setInputData] = useState<string>("");
  const [items, setItems] = useState<item[]>([]);
  const [editId, setEditId] = useState<string>("");

  const handleSubmit = () => {
    if (inputData?.trim()?.length) {
      if (editId?.length) {
        setItems((prev) =>
          prev.map((item) =>
            item.id === editId ? { ...item, data: inputData } : item
          )
        );
        setEditId("");
        setInputData("");
      } else {
        setItems((prev) => [
          ...prev,
          {
            data: inputData,
            id: Date.now().toString(),
            completed: false,
          },
        ]);
        setInputData("");
      }
    }
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleComplete = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEdit = (item: item) => {
    setInputData(item.data);
    setEditId(item.id);
  };

  return (
    <div className="bg-[#003161] p-2 min-h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-[90%] bg-[#000B58] p-4 rounded-md shadow-md">
        <h1 className="text-center text-white text-2xl">Todos for the day</h1>
        <div className="flex gap-2 justify-center my-8">
          <input
            type="text"
            placeholder="Add Todo"
            value={inputData}
            className="flex-3 border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md focus:border-white"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="flex-1 bg-[#006A67] cursor-pointer rounded-md text-sm hover:bg-[#003161] text-white"
            onClick={handleSubmit}
          >
            Add Todo
          </button>
        </div>
        <div>
          <h1 className="text-center text-white text-xl">Todos</h1>
          {items?.map((item) => (
            <div
              key={item.id}
              className="bg-[#006A67] p-2 rounded-md flex justify-between items-center my-4 text-white"
            >
              <p className={`${item.completed ? "line-through decoration-[#003161]" : ""}`}>
                {item.data}
              </p>
              <div className="flex items-center gap-2 cursor-pointer">
                <FaCheckCircle
                  className="hover:text-[#003161]"
                  onClick={() => handleComplete(item.id)}
                />
                <FaEdit
                  className="hover:text-[#003161]"
                  onClick={() => handleEdit(item)}
                />
                <FaTrash
                  className="hover:text-[#003161]"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
