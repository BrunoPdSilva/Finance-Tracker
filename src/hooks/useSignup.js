import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const { dispatch } = useAuthContext();

  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);
      //Se não obtivermos uma resposta do Firebase então exibimos esse erro:
      if (!res) throw new Error("Couldn't create user");
      //Adicionaf o nome de usuário.
      await res.user.updateProfile({ displayName });
      //Usuário é logado após ter realizado o cadastro.
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        console.log(res.user);
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isLoading };
};
