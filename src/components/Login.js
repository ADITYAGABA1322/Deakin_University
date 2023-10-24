import React, { useEffect, useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate} from 'react-router-dom';
import {app,signInWithGoogle,saveGoogleUser} from './firebase'
import { auth } from './firebase';
import {  setPersistence, browserLocalPersistence} from "firebase/auth";
import { GoogleOutlined, LinkOutlined } from "@ant-design/icons"
 import{Link} from "react-router-dom";
export default function Login(props) {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[message,setmessage]=useState("");
    const navigate = useNavigate();
    const LoginUser=()=>{        
signInWithEmailAndPassword(auth,email,password)
.then((e)=>{

   console.log("Logged in Succesfully")
   props.showAlert("Loggedin Successfully","success")
   navigate('/');


  })
.catch((err)=>{
     console.log(err)
     setmessage("Invalid Email or password");
    })
    }
    
    const SignUp=()=>{
           navigate('/Signup')
      
    }
    const LoginwithGoogle = () => {
      const res = signInWithGoogle()
      res.then(async(data) => {
          try {
             await saveGoogleUser(data.user.email, data.user.displayName, data.user.metadata.creationTime)
              props.showAlert("Loggedin Successfully,Now you Can Post Anything","success")
              navigate('/')
          } catch (error) {
              //console.log('error', error.message)
              throw new Error('ok')
          }
      })

  }
    return (
        <div className="d-grid gap-2 col-6 mx-auto">

  <div className="mb-3">
      <div className=" gap-2d-grid gap-2 d-md-flex justify-content-md-end my-3"> <button  onClick={SignUp} className="btn btn-outline-primary">SignUp</button></div>
    <label htmlFor="exampleInputEmail1" className="form-label">Your email</label>
    <input onChange={(e)=>{setEmail(e.target.value); setmessage("")}} value={email} type="email" className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Your password</label>
    <input onChange={(e)=>{setPassword(e.target.value); setmessage("")}} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
    <h7 class="text-danger">{message}</h7>
  </div>
  <Link to='/forget'>Forget your password?</Link>
  <div className="d-grid gap-2"> <button  onClick={LoginUser} className="btn btn-primary">Login as user</button></div>
  <button  className='btn btn-danger'onClick={ LoginwithGoogle }>{<GoogleOutlined/>} Login with Google</button>
        </div>
      )
}
