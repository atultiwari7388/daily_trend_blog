import { createContext, useContext, useState } from "react";

const AuthContext = createContext;

//create a provider
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSigninWithGoogle = async () => {};
  const handleLogout = async () => {};

  return (
    <AuthContext.Prvoder
      value={{ user, isLoading, error, handleSigninWithGoogle, handleLogout }}
    >
      {children}
    </AuthContext.Prvoder>
  );
}

//lets create a hook
export const useAuth = () => useContext(AuthContext);
