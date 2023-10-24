import React, { useContext, useEffect, useState } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import './SubscriptionCard.css'
import Footer from './Footer';
import { GetPlan, updateUser } from './firebase';
import dataContext from '../context/dataContext';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';

export default function SubscriptionCard({user}) {
     const data=useContext(dataContext)
    const navigate=useNavigate()
    const onToken=async(PlanType)=>{
      await updateUser(user.email,PlanType); 
      alert("Payment Successfull")
      window.location.reload();
    }
  return (
    <div>
        {/* <h1>HLOO{data.Plan}</h1> */}
 <h1 style={{textAlign:'center'}}>Upgrade Plans</h1>
 <h3 className='my-3'style={{textAlign:'center',color:'red'}}>Current Plan:{data.Plan}</h3>

<div className='sub'>
      
      <div class="container h-100">
  <div class="row align-middle">
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-1">
        <div class="txt">
          <h1>Free</h1>
          <p>View Tech News</p>
          <p></p>
        </div>
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-2">
        <div class="txt">
          <h1>Basic</h1>
          <p>View Articles</p>
        </div>
        <h2 style={{textAlign:'center'}} >$10/Month</h2>
        <StripeCheckout
        className="hloo"
        token={()=>onToken("Basic")}
        name="Basic Plan PAYMENT"
        currency='aud'
         amount="1000.00"
        stripeKey="pk_test_51O0zR2SEj7me9Njx7AihBCtOwFXXwemM3tIpqwI19cjqyFZdXTHYndJgIP9tgqjnfiAKCWPLamO5MLEBRJStu4qI00v0CiuRAE"
      />
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-3">
        <div class="txt">
          <h1>Pro</h1>
          <p>View & Post Articles</p>
        </div>
        <h2 style={{textAlign:'center'}}>$50/Month</h2>
        <StripeCheckout
        className="hloo"
        token={()=>onToken("Pro")}
        name="Pro Plan PAYMENT"
        currency='aud'
         amount="5000.00"
        stripeKey="pk_test_51NxewHSHwAktsFMieecjKQH210HRJUGYvRO7LGMT2wDmjaaKFmGFw1j7qAvtaUtLVZhjQIx2uiAANk3tomUVmEOs00MqjxDnTE"
      />
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>
    </div>
      
    </div>
    
  )
}
