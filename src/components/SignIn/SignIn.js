import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app);
const SignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [user, setUser] = useState({});
    const handleGoogleSignIn = () => {
        console.log('working')
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            });
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                const user = res.user;
                console.log(user)
                setUser(user)
            })
            .cath(error => {
                console.log(error)
            })
    }
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error(error);
        })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(res => {
                setUser({})
            })
            .catch(error => {
                setUser({})
            })
    }
    const navigate = useNavigate();
    const handleEmailSignIn = () => {
        console.log("email sign in")
        const path = '/register';
        navigate(path);
    }
    return (

        <div className="App m-5">
            {
                user.uid ? <div className='w-1/2 m-auto'><button className='w-1/2 bg-red-700 text-red-50 px-6 py-2 rounded hover:scale-105 duration-200' onClick={handleSignOut}>sign out</button></div> :
                    <div className='grid grid-cols-1 w-1/3 mx-auto gap-3 '>
                        <button className='bg-rose-700 text-rose-50 px-6 py-2 rounded hover:scale-105 duration-200 ' onClick={handleGoogleSignIn}>Google SignIn</button>
                        <button className='bg-stone-700 text-stone-50 px-6 py-2 rounded hover:scale-105 duration-200 ' onClick={handleGithubSignIn}>GitHub SignIn</button>
                        <button className='bg-blue-700 text-blue-50 px-6 py-2 rounded hover:scale-105 duration-200 ' onClick={handleFacebookSignIn}>Facebook SignIn</button>
                        -OR-
                        <button className='bg-pink-700 text-pink-50 px-6 py-2 rounded hover:scale-105 duration-200 ' onClick={handleEmailSignIn}>Email SignIn</button>
                    </div>
            }
            <div className="mt-4">

                <div className="flex justify-center rounded-full">
                    <img className='rounded-full h-20 w-20' src={user.photoURL} alt="" />
                </div>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>

        </div>

    );
};

export default SignIn;