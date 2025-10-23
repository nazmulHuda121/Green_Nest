import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a User...
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LogedIn User....
  const logedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut User ...
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast('LogedOut Succesfully Complete');
      })
      .catch((error) => console.log(error));
  };

  // User observation using onAuthState
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    createUser,
    user,
    setUser,
    loading,
    setLoading,
    logedInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
