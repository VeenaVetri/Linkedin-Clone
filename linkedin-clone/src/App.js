// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { login, logout, selectUser } from './features/user/userSlice';
import { selectUser } from './features/user/userSlice';
import Feed from './Feed';
// import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function App() {

  const user = useSelector(selectUser)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if(userAuth) {
  //       //User logged in
  //       dispatch(login({
  //         email: userAuth.email,
  //         uid: userAuth.uid,
  //         displayName: userAuth.displayName,
  //         photoURL: userAuth.photoURL
  //       }))
  //     } else {
  //       //user logged out
  //       dispatch(logout())
  //     }
  //   })
  // }, [])

  console.log('Rendering App')
  console.log({user})
  return (
    <div className="app">
      <Header />
      {!user ? <Login />
      :(
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>)
      }

    </div>
  );
}

export default App;