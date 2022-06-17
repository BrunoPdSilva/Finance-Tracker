import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("No AuthContext")

  return context;
}