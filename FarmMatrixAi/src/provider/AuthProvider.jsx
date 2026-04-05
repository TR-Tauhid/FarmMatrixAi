import React, { useCallback, useEffect, useState } from "react";
import Authcontext from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Bounce, toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(null);
  const [user, setUser] = useState(null);
  const { theme } = useTheme();
  const notify = useCallback(
    (msg, type) => {
      toast[type](msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${theme}`,
        transition: Bounce,
      });
    },
    [theme],
  );

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = async (name) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    notify("worked", name);
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

  const gitHubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
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
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const AuthValue = {
    user,
    loading,
    authChecked,
    setLoading,
    notify,
    logOut,
    updateName,
    createUserWithEmail,
    loginWithEmailPass,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signInWithTwitter,
  };

  return (
    <Authcontext.Provider value={AuthValue}>{children}</Authcontext.Provider>
  );
}
