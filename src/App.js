import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
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
  const handleSignOut = () => {
    signOut(auth)
      .then(res => {
      setUser({})
      })
      .catch(error => {
      setUser({})
    })
  }
  return (
    <div className="App m-5">
      {
        user.uid ? <div className='w-1/2 m-auto'><button className='w-1/2 bg-red-700 text-red-50 px-6 py-2 rounded hover:scale-105 duration-200' onClick={handleSignOut}>sign out</button></div> :
          <div className='grid grid-cols-2 gap-5 '>
            <button className='bg-green-700 text-green-50 px-6 py-2 rounded hover:scale-105 duration-200 ' onClick={handleGoogleSignIn}>Google SignIn</button>
            <button className='bg-gray-700 text-gray-50 px-6 py-2 rounded hover:scale-105 duration-200 ' onClick={handleGithubSignIn}>GitHub SignIn</button>
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
}

export default App;
