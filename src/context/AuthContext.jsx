import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";

//1- create context
export const AuthContext = createContext();

//2- Define the provider component
export const AuthContextProvider = (props) => {
  //Declare here the state and functions you want to explore/make available
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const registeredUser = userCredential.user;
      registeredUser;
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log("register went wrong :>> ", error);
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed in
        const loggedUser = userCredential.user;
        console.log("loggedUser :>> ", loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log("errorCode :>> ", errorCode);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        //Sign-out successful
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("error siging out :>> ", error);
      });
  };

  const checkIfUserIsActive = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is still logged in");
        console.log("uid :>> ", uid);
        console.log("user :>> ", user);
        setUser(user);
      } else {
        console.log("user is logged out");
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkIfUserIsActive();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
