import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'

import { auth, provider } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setuser } from '../Redux/Appslice';  // Correct the path if needed



const Login = () => {
    const dispatch = useDispatch()
    const signInWithGoogle = async () => {
        try {
          // Force account selection by adding 'select_account' prompt
          provider.setCustomParameters({
            prompt: 'select_account',
          });
    
          const result = await signInWithPopup(auth, provider);
          console.log(result);
    
          dispatch(setuser({
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          }));
        } catch (error) {
          console.log(error);
        }
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
        <div className=' flex gap-3 rounded-md p-8 bg-white flex-col'>
            <h1 className='text-center text-xl font-medium mb-5'> LOGIN </h1>
            <GoogleButton  onClick={signInWithGoogle}/>
        </div>


    </div>
  )
}

export default Login