import firebaseAuthentication from "../../Firebase/firebase.initialize";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    FacebookAuthProvider
} from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    firebaseAuthentication();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    const registerUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                updateName(name);
                if (user) {
                    signOutCurrentUser();
                }
            })
    }
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            setError('');
        }).catch(error => {
            setError(error.message)
        });
    }
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("User Not Found")
                }
                else if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError("Wrong Password")
                }
                else {
                    setError(error.message)
                }
            })
    }

    const signInWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();

        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("User Not Found")
                }
                else if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError("Wrong Password")
                }
                else {
                    setError(error.message)
                }
            })
    }


    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("User Not Found")
                }
                else if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError("Wrong Password")
                }
                else {
                    setError(error.message)
                }
            })
    }
    const signOutCurrentUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    console.log(user);

    return {
        user,
        auth,
        signInWithGoogle,
        signOutCurrentUser,
        registerUser,
        updateName,
        signIn,
        error,
        signInWithFacebook
    }

}
export default useFirebase;