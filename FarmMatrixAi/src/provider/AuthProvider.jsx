import React, { useEffect, useState } from "react";
import Authcontext from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(null);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookProvider = new FacebookAuthProvider();
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const twitterProvider = new TwitterAuthProvider();
  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setAuthChecked(true);
      // console.log(currentUser);
      return () => {
        unsubscribe();
      };
    });
  });

  const AuthValue = [
    loading,
    user,
    updateName,
    createUserWithEmail,
    loginWithEmailPass,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
  ];

  return (
    <Authcontext.Provider value={AuthValue}>{children}</Authcontext.Provider>
  );
}
