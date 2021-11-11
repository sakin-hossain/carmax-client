import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../src/Pages/Shared/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
// check if login or not
    const checkedIsLogin = e =>{
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
// form handler
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 8){
            setError("Password Must be at least 8 characters long.");
            return;
        }

        isLogin? processToLogin(email, password): processToRegister(email,password);
    }
// register function
    const processToRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
    }
// login via email and password
    const processToLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
      };
// check current user sill logged in or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
// verify new user by mail
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result=>{
        console.log(result);
      })
    };
// forget password or reset password
    const handleResetPass = () => {
      sendPasswordResetEmail(auth, email)
      .then(result=>{
        console.log(result);
      })
    }
// logout function
const logOut = () =>{
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }).finally(() => setIsLoading(false));
}
    return {
        signInUsingGoogle,
        logOut,
        checkedIsLogin,
        handleSubmit,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleResetPass,
        isLogin,
        user,
        setUser,
        setError,
        email,
        password,
        name,
        setIsLoading,
        isLoading,
        processToLogin,
        processToRegister,
        error
    }
}

export default useFirebase;