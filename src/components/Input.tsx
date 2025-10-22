import React from "react"
import { ReactSetState } from "@/utils/types"

type Input= {
    inputData:string;
    setInputData:ReactSetState<string>;
}

export default function Input ({inputData,setInputData}:Input){
    return (
        <input
            type="text"
            placeholder="Add Todo"
            value={inputData}
            className="flex-3 border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md focus:border-white"
            onChange={(e) => setInputData(e.target.value)}
          />
    )
}