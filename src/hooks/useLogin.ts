import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useSignIn = () => {
  const [error, setError] = useState(null);

  const signin = async (values: any) => {
    const { email, password } = values;
    console.log(values);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      alert("User Logged In Successfully");
      console.log(user);
    } catch (error: any) {
      setError(error?.message);
      alert(error?.message);
    }
  };

  return { error, signin };
};
