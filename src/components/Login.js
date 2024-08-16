import React, { useRef, useState } from 'react'
import Header from './Header';
import { CheckValidation } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';

const Login = () => {
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null)

  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessege, setErrorMessge] = useState();
  const handleSignIN = () => {
    setIsSignIn(!isSignIn);
  }

  const handleSubmit = () => {

    // console.log(Email.current.value);
    // console.log(Password.current.value);
    setErrorMessge(CheckValidation(Email.current.value, Password.current.value));
    if (errorMessege) return;

    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user)
          toast.success('Sign up successful');

          updateProfile(auth.currentUser, {
            displayName: Name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName:displayName }));
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessge(errorCode + '-' + errorMessage)
          // ..
        });


    }

    else {
      signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if (user) {
            toast.success("login succsssfull")
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessge(errorMessage);
        });
    }

  }





  return (
    <div>
      <div><Toaster /></div>
      <Header />

      <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg" alt="bckground" />

      <div className='absolute w-3/12 top-[8rem] left-[35vw] p-12 bg-black bg-opacity-85'>
        <form onSubmit={(e) => e.preventDefault()} action="" className='text-white flex flex-col justify-center gap-3 rounded-lg  '>
          <h1 className=' font-bold text-4xl py-4'>{isSignIn ? "Sign In" : "Sign up"}</h1>

          {
            !isSignIn && <input ref={Name} type="name" placeholder='Full Name' className='p-4 w-full my-2  bg-gray-700 bg-opacity-70' />
          }
          <input ref={Email} type="email" placeholder='Email' className='p-4 w-full my-2  bg-gray-700 bg-opacity-70' />


          <input ref={Password} type="password" placeholder='Password' className='p-4 w-full my-2  bg-gray-700 bg-opacity-70' />
          <p className=' text-red-600 text-lg '>{errorMessege}</p>


          <button onClick={handleSubmit} className=' bg-red-600 p-4 my-6 rounded-lg'>{isSignIn ? "Sign In" : "Sign up"}</button>
          <div className='flex gap-1 text-lg'>
            <p className='text-gray-400'>{isSignIn ? "New to Netflix?" : "Already a user ?"}</p>
            <p className=' cursor-pointer font-bold' onClick={handleSignIN}>{isSignIn ? "Sign up now" : "Sign in"}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;