"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import ItemsList from "@/components/ItemsList";
import { useState } from "react";
import { item } from "@/utils/types";



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

  return (
    <div className="bg-[#003161] p-2 min-h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-[90%] bg-[#000B58] p-4 rounded-md shadow-md">
        <h1 className="text-center text-white text-2xl">Todos for the day</h1>
        <div className="flex gap-2 justify-center my-8">
          <Input inputData={inputData} setInputData={setInputData} />
          <Button handleSubmit={handleSubmit} />
        </div>
        <div>
          <h1 className="text-center text-white text-xl">Todos</h1>
          <ItemsList
            items={items}
            setItems={setItems}
            setEditId={setEditId}
            setInputData={setInputData}
          />
        </div>
      </div>
    </div>
  );
}
