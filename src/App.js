import "./App.css";
import Login from "./components/Login";
import React, { useState } from 'react'
import SignUp from "./components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import {auth, app, GetPlan } from "./components/firebase";
import { BrowserRouter as Router, Routes, Route, Await } from "react-router-dom";
import { Header } from "./components/Header"
import Homepage from "./components/Homepage";
import Alert from "./components/Alert";
import Post from "./components/Post";
import { useEffect } from "react";
import Forget from "./components/Forget";
import FindQuestion from "./components/FindQuestion";
import FindArticles from "./components/FindArticles";
import TechNews from "./components/TechNews";
import SubscriptionCard from "./components/SubscriptionCard";
import DataState from "./context/dataState";
import ErrorBoundary from "./components/ErrorBoundary";
import Protected from "./Protected";
function App() {
  const[alert,setAlert]=useState(null);
  const[user,setUser]=useState("");
  const[isLogged,SetisLogged]=useState(false);
  const[show,setShow]=useState(0);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  useEffect(()=>{
   onAuthStateChanged(auth,async(user)=>{
    if(user){
      SetisLogged(1);
      console.log("User->",user);  
      setUser(user);
    }
    else{
      SetisLogged(0);
      console.log("LOGEEDOUT",isLogged);
    }
   })
   setTimeout(()=>{
    setShow(1)
   },2000)
  },[user])
  return (
    <>
      <Router>
      <Alert alert={alert}/>
        <div className="resizable-content">
          <DataState user={user}>
          <ErrorBoundary>
          <Routes>
           {show?<Route exact path="/" element={<Header isLogged={isLogged} showAlert={showAlert}/>} >
            <Route index element={ <Homepage showAlert={showAlert} user={user}/>} />
            <Route exact path="/FindQuestion" element={<Protected isLogged={isLogged} user={user} showAlert={showAlert} Component={FindQuestion}/>} />
            {/* <Route exact path="/FindQuestion" element={<Protected isLogged={isLogged} user={user} showAlert={showAlert}  component={FindQuestion}/>} /> */}
            <Route exact path="/FindArticle" element={<Protected isLogged={isLogged} user={user} showAlert={showAlert} Component={FindArticles}/>} />
            <Route exact path="/TechNews" element={<Protected isLogged={isLogged} user={user} showAlert={showAlert} Component={TechNews}/>} />
            <Route exact path="/subscribe" element={<Protected isLogged={isLogged} user={user} showAlert={showAlert} Component={SubscriptionCard}/>} />
            <Route exact path="/postpage" element={<Protected isLogged={isLogged} user={user} showAlert={showAlert} Component={Post}/>} />
            </Route>
            :""}
            <Route exact path="/login" element={ <Login user={user} showAlert={showAlert} />} />
            <Route exact path="/Signup" element={<SignUp showAlert={showAlert} />} />
            <Route exact path="/forget" element={<Forget />} />
          </Routes>
          </ErrorBoundary>
          </DataState>
        </div>
      </Router>
    </>
  );
}

export default App;
