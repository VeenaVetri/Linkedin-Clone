import React, { useState } from 'react'
import './Login.css'
import loginImage from './LinkedInLogin.jpeg'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from './features/user/userSlice'
function Login() {

    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const loginToApp =(e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        })
        .catch(error => alert(error))
    }

    const register = () => {
        if (!name) {
            return alert("Full name is required!")
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
            })
        })
        .catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img src={loginImage} alt="" />

            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)} 
                placeholder='Full name (required if registering)' />

                <input type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)}
                placeholder='Profile pic (optional)'/>

                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder='Email'/>

                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder='Password'/>

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? {" "}
            <span className='login_register' onClick={register}>Register now</span></p>
        </div>
    )
}

export default Login