import { getCurrentUser, loginUser, registerUser } from "@/api/auth-service";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Models } from "react-native-appwrite";

interface ContextValue {
  user: Models.User<Models.Preferences> | null;
  register: (email: string, password: string, name: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  // fetchUser: () => Promise<void>
}

const AuthContext = createContext<ContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null,
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const current = await getCurrentUser();
        setUser(current);
      } catch (error) {
        console.log(error, "Auth log");
        setUser(null);
      }
    };
    fetchUser();
    console.log(user);
    
  }, []);

  const register = async (email: string, password: string, name: string) => {
    await registerUser(email, password, name)
    await login(email, password);
    setUser(await getCurrentUser());
  }

  const login = async (email: string, password: string) => {
    await loginUser(email, password)
    setUser(await getCurrentUser())
  }

  return (
    <AuthContext.Provider value={{ user, register, login }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useMyContext must be used within MyContextProvider");
    }
    return context;
};
