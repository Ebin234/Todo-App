import React from "react";

export type item = {
  data: string;
  id: string;
  completed: boolean;
};

export type ReactSetState<T> =  React.Dispatch<React.SetStateAction<T>>