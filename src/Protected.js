import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
    const{Component,isLogged,user,showAlert}=props
    const navigate=useNavigate()
    useEffect(()=>{
     if(!isLogged){
        navigate('/login')
     }
     if(!user.emailVerified)  {props.showAlert("Verify your Email First","info"); navigate('/')}
    },[])
  return (
    <div>
      <Component user={user} showAlert={showAlert}/>
    </div>
  )
}
