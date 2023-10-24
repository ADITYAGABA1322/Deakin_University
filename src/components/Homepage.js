import React,{useContext, useEffect, useState} from 'react'
import welcome from'./welcome.gif'
import { storeuserdata } from './firebase'
import Footer from './Footer';
import SignUp from './SignUpInsider';
import { faker } from '@faker-js/faker';
import Featured from './Featured';
import { Header } from './Header';
import './Homepage.css'
import { useNavigate} from 'react-router-dom';
import { GetQuestions,GetArticles } from './firebase'
import dataContext from '../context/dataContext';
export default function Homepage(props) {
  const{showAlert}=props
  const data=useContext(dataContext)
const[articles,setArticles]=useState([])
  const updateArticles=async()=>{
    console.log("Updating LISt")
    let val= await GetArticles()
    val=val.slice(0,3)
    setArticles(val)
  }
const[questions,setQuestions]=useState([])
const updateList=async()=>{
  console.log("Updating LISt")
  let val= await GetQuestions()
  val=val.slice(0,3)
  setQuestions(val)
}
  useEffect(()=>{
 updateList()
 updateArticles()
   },[]) 

const Navigate=useNavigate();
 const handleQuestion=()=>{
 Navigate('/FindQuestion')
 }
 const handleArticle=()=>{
  if(data.Plan==="Basic"||data.Plan==="Pro")Navigate('/FindArticle')
  else alert('Upgrade to Basic Plan To Find all Articles')
 }

  return (
    <>
      <div >
      <img className='mainimage' src="https://oztrekk.com/wp-content/uploads/2018/12/deakin_sign.jpg" alt="Displaying" />
    </div>
        <Featured title={"Find Questions"} List={questions} buttontext={"Find all Questions"} handleclick={handleQuestion} />       
        <Featured title={"Find Articles"} List={articles} buttontext={"Find all Articles"} handleclick={handleArticle} />
        <SignUp showAlert={showAlert}/>
        <Footer/>
        
    </>
  );
}

