import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signup = async (email, password, displayName, photoURL) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName,
        photoURL,
      });
      setUser(res.user);
      console.log(res.user);
      navigate("/", { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
