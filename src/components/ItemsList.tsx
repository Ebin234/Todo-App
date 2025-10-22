"use client";

import React from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import { item, ReactSetState } from "@/utils/types";

type ItemsList = {
    items:item[];
    setItems:ReactSetState<item[]>;
    setInputData:ReactSetState<string>;
    setEditId:ReactSetState<string>;
}

function ItemsList({ items,setItems,setInputData,setEditId }:ItemsList) {

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

  return items?.map((item) => (
    <div
      key={item.id}
      className="bg-[#006A67] p-2 rounded-md flex justify-between items-center my-4 text-white"
    >
      <p
        className={`${
          item.completed ? "line-through decoration-[#003161]" : ""
        }`}
      >
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
  ));
}

export default ItemsList;
