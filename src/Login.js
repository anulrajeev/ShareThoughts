import React, { useState } from 'react'
import './Login.css'
import {auth} from './Firebase'
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch();
   
    const loginToApp = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(userAuth=>{
                 dispatch(login({
                     email: userAuth.user.email,
                     uid : userAuth.user.uid.uid,
                     displayName: userAuth.user.displayName,
                     photoUrl : userAuth.user.photoURL,
                 }))
            })
            .catch((error)=>alert(error));
        
    };
    const register = ()=> {
        if(!name)
           return alert('Please Enter your name....');
        auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                userAuth.user
                .updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(()=>{
                    dispatch(login({ 
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName : name,
                        photoUrl : profilePic 
                    }));
                  
                 });   
            })
            .catch(error => alert(error));
         };
    return (
        <div className='login'>
           <img src="https://www.fccnn.com/incoming/6766966-513vts-share-your-thoughts-article.jpg/alternates/BASE_LANDSCAPE/share-your-thoughts-article.jpg"/>
           <form>
               <input type="text"      value={name}         onChange={e=>setName(e.target.value)}       placeholder='Full Name (required)'></input>
               <input type="text"      value={profilePic}   onChange={e=>setProfilePic(e.target.value)} placeholder='Profile pic URL(optional)' ></input>
               <input type="email"     value={email}        onChange={e=>setEmail(e.target.value)}      placeholder='Email' ></input>
               <input type="password"  value={password}     onChange={e=>setPassword(e.target.value)}   placeholder='Password' ></input>
               <botton type="submit" onClick={loginToApp}>Sign In</botton>
           </form>
           <p> Not a member ?  { "  "}
               <span className="login__register" onClick={register}>Register Now</span>
           </p>
        <div className="login__bottom">
        <a href="https://www.facebook.com/anul.rajeev"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></a>
                    Developed by Anul Rajeev    
        <a href="https://www.linkedin.com/in/anulrajeev/"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
        </div>
        </div>
    )
}

export default Login
