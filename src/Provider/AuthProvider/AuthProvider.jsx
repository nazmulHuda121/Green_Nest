import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useState } from 'react';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Create a User...
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LogedIn User....
  const logedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authData = {
    createUser,
    user,
    setUser,
    logedInUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
