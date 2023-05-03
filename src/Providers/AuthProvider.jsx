import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // profile update
  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
  };
  const authInfo = {
    user,
    createUser,
    LoginUser,
    profileUpdate,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
