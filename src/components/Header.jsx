import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from './redux/userSlice';

const Header = () => {

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      console.log('Setting up onAuthStateChanged listener');
  
      // Setting up the listener
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          console.log("Sign in successful -->" + email);
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          console.log("Sign out successful");
          navigate('/');
        }
      });
  
      // Clean up the listener on component unmount
      return () => {
        console.log('Cleaning up onAuthStateChanged listener');
        unsubscribe();  
      };
    }, [dispatch, navigate]); // Dependency array ensures effect runs only on mount and unmount

    const handleSignOut = () => {
        console.log("Sign out button clicked");
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful");
            dispatch(removeUser);
        }).catch((error) => {
            // An error happened.

            console.log("Error during sign-out", error);
        });
    };

    return (
        <div>
            <div className='absolute bg-gradient-to-b from-black flex flex-row justify-between w-full p-4 z-20'>
                <img
                    className='w-[10%]'
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo"
                />
                {
                    user && <button
                        onClick={handleSignOut}
                        className='bg-blue-500 text-white rounded-md px-4 text-lg'
                    >
                        Sign out
                    </button>
                }
            </div>
        </div>
    );
}

export default Header;
