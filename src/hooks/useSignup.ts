import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = async (values: any) => {
    const { name, email, password } = values;
    console.log(values);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const use = await addDoc(collection(db, "users"), {
        uid: user?.uid,
        name,
        email,
        password,
      });
      console.log(use);
      if (use) {
        alert("User Created Successfully");
      }
      console.log(user);
    } catch (error: any) {
      setError(error?.message);
      alert(error?.message);
    }
  };

  return { error, signup };
};
