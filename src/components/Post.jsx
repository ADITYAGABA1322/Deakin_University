import React, { useState,useEffect, useContext } from "react";
import PostHeading from "./PostHeading";
import Article from "./Article";
import Question from "./Question";
import PostType from "./PostType";
import { Outlet } from 'react-router-dom';
import './Post.css'
import { Header } from "./Header";
import NewPostNavbar from "./NewPostNavbar";
import {auth} from "./firebase";
import dataContext from "../context/dataContext";
export default function Post(props) {
  const data=useContext(dataContext)
  const [PostSelected, setPost] = useState(1); 
  const [username, setusername] = useState("...."); 
  const [userId, setuserId] = useState(""); 
  const setState = (val) => {
    setPost(val);
  }

  return (
    <div className="postcontainer my-3">
        <NewPostNavbar/>
      <PostType setState={setState} />
      <div className="heading">
      </div >
      <div className="posts">
        <h1>Welcome {props.user?props.user.displayName:"...."}</h1>
      {PostSelected === "1" ? <Question author={props.user?props.user.displayName:""} userId={props.user?props.user.uid:""} /> : PostSelected === "2" && data.Plan==="Pro"? <Article author={props.user?props.user.displayName:""}/>:PostSelected === "2"?<h1>Upgrade to Pro Plan To Post Articles</h1>:""}
        </div> 
      
    </div>
  );
}
