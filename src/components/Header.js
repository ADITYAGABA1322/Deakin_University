import React ,{ useState} from 'react'
import Style from'./Header.css'
import { useNavigate} from 'react-router-dom';
import Login from './Login'
import { app, auth } from './firebase';
import { Outlet } from "react-router-dom"
import { useEffect } from 'react';
import Homepage from './Homepage';
export const Header = (props) => {
  const{isLogged}=props;
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {
    auth.signOut();
    props.showAlert("LoggedOut Successfully","success")
  }
 const posthandler=()=>{
     navigate('/postpage')
  }
  return (
    <>
<nav class="navbar bg-body-tertiary" >
  <div class="container-fluid " id='navbarheader' style={{ background: 'rgba(57, 57, 73, 0.432)'}}>
       <h3 id='title'>DEV@Deakin</h3>
      <input type="text" class="form-control mx-3 md-3 " id='searchinput' placeholder="&#x1F50E;&#xFE0E;Search..."/> 
      {isLogged?<button id='postbutton'onClick={(e)=>{navigate('/subscribe')}}>Plans</button>:""}
      {isLogged? <button id='postbutton' onClick={(e)=>{navigate('/TechNews')}}>TechNews</button>:""}
      {isLogged?<button id='postbutton'onClick={(e)=>{posthandler()}}>Post</button>:""}
      <div className='mx-2'>
      { 
       isLogged?<button id='loginbutton' onClick={(e)=>handleLogout()}>LogOut</button>:<button id='loginbutton' onClick={navigateToLogin}>Login</button>
      }
      </div>
    </div>
</nav>
    <Outlet/>
</>
  )
}


