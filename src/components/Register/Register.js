import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';
const auth = getAuth(app);
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [registered, setRegistered] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleFormSubmit = event => {
        console.log(email, '=>', password)
        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    setEmail('');
                    setPassword('');
                    setSuccess('Login Success');
                    setError('');
                    console.log(user);
                })
                .catch(error => {
                    console.error(error);
                    setError('Not registered');
                    setSuccess('')
            })
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setEmail('');
                setPassword('');
                setSuccess('Register success!');
                setError('');
                verifyEmail();
                setUserName();
                setPhoneNumber();
            })
            .catch(error => {
                console.error(error);
                setError('User exist!');
                setSuccess('');
            });
        }
        
        event.preventDefault();
    }
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleRegisterChange = event => {
        setRegistered(event.target.checked)
    }
    
    const verifyEmail = ()=>{
        sendEmailVerification(auth.currentUser)
            .then(result => {
                const user = result.user;
                console.log('mail sent', user);
        })
    }
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth,email)
        .then(()=>{console.log('reset link sent')})
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name, phoneNumber: phone
        })
        .then(()=>{console.log(name)})
    }
    const setPhoneNumber = () => {
        updateProfile(auth.currentUser, {
            phoneNumber: phone
        })
    }
    return (
        <div className=''>
            <form action="" onSubmit={handleFormSubmit}>
                
                <div className="grid grid-cols-1 w-1/3 justify-center items-center mx-auto border-2  px-10 py-20 rounded mt-10">
                    <div className="">
                    <p>Please { registered ? 'Login' : 'Register'}!!</p>
                    </div>
                    {!registered && <div className="mt-3">
                        <label htmlFor="">Name</label>
                        <input onBlur={handleNameBlur} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="text" name="" id="" placeholder='your name' />
                    </div>}
                        {!registered &&
                    <div className="mt-3">
                        <label htmlFor="">Phone</label>
                        <input onBlur={handlePhoneBlur} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="text" name="" id="" placeholder='your phone number'/>
                    </div>}
                    <div className="mt-3">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="email" name="" id="" placeholder='youremail@domain.com'/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="password" name="" id="" placeholder='set a password' />
                    </div>
                    <div className="mt-1">
                        <input onChange={handleRegisterChange} type="checkbox" name="" id="" />
                        <span className='ml-2'>Already Registered?</span>
                    </div>
                    <div className="">
                        <button onClick={handlePasswordReset}>Forgot password?</button>
                    </div>
                    <p>{success }</p>
                    <p>{error}</p>
                    <div className="mt-6 ">
                        <button className='bg-green-700 text-green-50 px-3 py-2 w-full rounded cursor-pointer hover:scale-105 duration-200' type="submit"  >
                                {registered ? 'Login' : 'Register'}
                            </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Register;