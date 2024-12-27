import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setuser } from './Redux/Appslice'; // Redux action to set user
import { auth } from './firebase/firebase'; // Firebase auth
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './Componets/Shared/Navbar';
import Sidebar from './Componets/Sidebar';
import Inbox from './Componets/Inbox';
import Mail from './Componets/Mail';
import Body from './Componets/Body';
import Sendmail from './Componets/Sendmail';
import Login from './Componets/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      { path: '/', element: <Inbox /> },
      { path: '/mail/:id', element: <Mail /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.appslice); // Get user from Redux store
  const [loading, setLoading] = useState(true); // Add loading state

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, dispatch user data to Redux
        dispatch(
          setuser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        // If no user is logged in, set user to null in Redux
        dispatch(setuser(null));
      }
      setLoading(false); // Set loading to false once auth state is checked
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [dispatch]);

  // If still loading, show a loading spinner
  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f8fb] h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-20 z-50">
            <Sendmail />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
