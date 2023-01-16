/** @format */

import { useReducer, createContext } from "react";

export const AuthContext = createContext();

export const authReducer = useReducer((state, action) => {
  switch (action) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
});

export const AuthContextProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
};

return (
  <AuthContext.Provider value={{ ...state, action }}>
    {Children}
  </AuthContext.Provider>
);

console.log(state);
