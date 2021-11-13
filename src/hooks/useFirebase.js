import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../src/Pages/Shared/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const signInUsingGoogle = (location, history) => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            saveUser(user.email, user.displayName, 'PUT');
          })
          .then(result => {
            const redirect_uri = location.state?.from || "/home";
            history.push(redirect_uri);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
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
        if(password.length < 5){
            setError("Password Must be at least 5 characters long.");
            return;
        }

        isLogin? processToLogin(email, password): processToRegister(email,password);
    }
// register function
    const processToRegister = (email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
            const newUser = { email, displayName: name };
            setUser(newUser);
            setError("");
            // setUserName();
            //save user to database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/')
            })
            .catch((error) => {
            setError(error.message);
            })
            .finally(() => {
            setIsLoading(false);
            // window.location.reload();
        });
    }
// login via email and password
    const processToLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
    //   };
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
useEffect(() => {
    fetch(`https://thawing-harbor-39490.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://thawing-harbor-39490.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
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
        admin,
        processToLogin,
        processToRegister,
        error
    }
}

export default useFirebase;

  