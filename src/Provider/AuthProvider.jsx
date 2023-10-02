/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading,setIsLoading]=useState(true)

  // singIn With google
  const googleLogin = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   create user email password
  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   SingIn
  const LogIn = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   singOut
  const logOut = () => {
    setIsLoading(true)
    return signOut(auth);
  };

  //   update profile
  const updateProfileInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // reset password
  const resetPasswordEmail = (email)=>{

    return sendPasswordResetEmail(auth,email)
  }

  // send user verification
  const emailVerification = ()=>{

    return sendEmailVerification(auth.currentUser)
  }

// Change password
const changePassword =(newPassword)=>{
  return updatePassword(auth.currentUser,newPassword)
}


  // observer
  useEffect(() => {
     onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false)
      console.log("observer", currentUser);
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    googleLogin,
    LogIn,
    logOut,
    updateProfileInfo,
    resetPasswordEmail,
    emailVerification,
    isLoading,
    changePassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
