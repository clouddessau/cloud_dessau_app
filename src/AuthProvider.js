import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        signIn: (email, password) => {
          auth()
            .signInWithEmailAndPassword(email, password)
            .catch(e => {
              setError(e);
            });
        },
        signOut: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            setError(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
