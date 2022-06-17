import { useState } from "react";
import { projectAuth } from "../firebase/config";

export function useSignup() {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);    
      if(!res) throw new Error("Couldn't create user");
      await res.user.updateProfile({ displayName });
      
      console.log(res.user);
      setIsLoading(false);
      setError(null);
      
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsLoading(false);
    }
  }
  return { signup, error, isLoading }
};