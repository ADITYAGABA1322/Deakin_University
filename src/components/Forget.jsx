import React, { useState } from 'react'
import { updateUserPassword } from './firebase';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Forget() {
    const[email,setEmail]=useState("");

    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()

        try {
            if (!email) {
                document.getElementById('error').innerHTML = 'Please enter your email!'
            } else {
                await updateUserPassword(email)
                navigate('/login')
            }
        } catch (error) {
            console.log('login with eamil error: ', error.message)
            document.getElementById('error').innerHTML = 'Sorry. Change password failed!'
        }
    }

    return (
        <div className="d-grid gap-2 col-6 mx-auto">

        <div className="mb-3 my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter your Registered email...</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="d-grid gap-2"> <button  onClick={handleClick}    className="btn btn-primary">Reset</button></div>
      
              </div>
    )
}

export default Forget