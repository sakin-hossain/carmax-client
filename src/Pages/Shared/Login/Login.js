import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const {handleSubmit, isLogin, handleEmailChange, handlePasswordChange, handleNameChange, checkedIsLogin, signInUsingGoogle, handleResetPass, error, setUser, setError,processToLogin, email, password, processToRegister} = useAuth();
    const location = useLocation();
    const history = useHistory();
    // handle redirecting using google login
    const googleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    const handleEmailLogin = () => {
            processToLogin(email, password)
            .then((result) => {
            const user = result.user;
            history.push(location.state?.from || '/home');
            setUser(user);
            setError("");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    }

    return (
        <div className="login">
            <form className="inputs" onSubmit={handleSubmit}>
                <h1 className="font-bold text-2xl text-center text-indigo-900">Please {isLogin ? "Login" : "Register"}</h1>
                {
                    !isLogin && <input onChange={handleNameChange} type="text" placeholder="Your Name" />
                }
                <br />
                <input onChange={handleEmailChange} type="email" placeholder="Your Email" /> <br />
                <input onChange={handlePasswordChange} type="password" placeholder="Your Password" /> <br />
                <input onChange={checkedIsLogin} type="checkbox" id="registered" value="registered"/>
                <label htmlFor="registered">Already Registered ?</label><br/>
                <div className="text-center">
                <p className="text-center text-danger">{error}</p>
                <div className="buttons">
                    {
                        isLogin? <button onClick={handleEmailLogin} type="submit"  className="btn__regular">Login</button>:
                        <button onClick={processToRegister} type="submit"  className="btn__regular">Register</button>                    
                    } <br />
                    {
                        isLogin && <button type="submit" onClick={handleResetPass} className="btn__regular">Forget Password</button>
                    }
                </div>
                </div>
            </form>
            <button onClick={googleSignIn} className="btn__regular">Google Sign In</button>
        </div>
    );
};

export default Login;