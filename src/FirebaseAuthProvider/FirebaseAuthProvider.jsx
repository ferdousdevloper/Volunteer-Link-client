/* eslint-disable react/prop-types */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebaseConfig";
import axios from "axios";


export const AuthContext = createContext(null);

//social auth providers
const googleLoginProvider = new GoogleAuthProvider();
const githubLoginProvider = new GithubAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleLoginProvider);
  };
  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubLoginProvider);
  };

  // update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //logout
  const logout = async () => {
    setUser(null);
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/logout`,{}, {
      withCredentials: true,
    })
    console.log(data)
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false regardless of user existence
      
    });
    return () => unsubscribe();
  }, []);

  const allValues = {
    signInUser,
    createUser,
    loading,
    setLoading,
    user,
    googleLogin,
    githubLogin,
    logout,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
};

export default FirebaseAuthProvider;
