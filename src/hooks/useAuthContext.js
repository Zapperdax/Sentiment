/** @format */

import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    //should not be used out of scope
    throw new Error(
      "useAuthContext should be used inside an AuthContextProvider"
    );
  }

  return context;
};
