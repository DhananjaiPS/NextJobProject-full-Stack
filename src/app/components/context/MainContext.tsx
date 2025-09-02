"use client";
import { createContext } from "react";

export type MainContextType = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

export const MainContext = createContext<MainContextType>({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
});
