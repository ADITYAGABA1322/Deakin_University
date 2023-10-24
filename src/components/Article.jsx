import React from 'react'
import LabelInput from "./LabelInput";
import TextBox from "./TextBox";
import Title from "./Title";
import "./Article.css"
import PostButton from './PostButton';
import AddImage from './AddImage';
import { useState } from "react";
import { storeArticledata } from './firebase';
import PostHeading from './PostHeading';
import { useNavigate } from 'react-router-dom';
export default function Article(props) {
  const[title,setTitle]=useState('');
  const[abstract,setAbstarct]=useState('');
  const[articleText,setArticleText]=useState('');
  const[tags,setTags]=useState('');
  const [imageUrl,setImageUrl]=useState("")
  const Navigate=useNavigate();
 const  handleClick=async()=>{
   if(title===""||abstract===""||articleText===""||tags==="")alert("Please fill all the Fields")
   else { await storeArticledata(title,abstract,imageUrl,articleText,tags,props.author);
    alert("Article Posted SuccessFully");
   Navigate('/FindArticle')
   }
   }
   console.log("Image Url-> ",imageUrl)
  return (
    <div>
    <PostHeading content="What do you want to ask or share" />
     <div id="ArticleTitle" ><Title set={setTitle} placeholder="Enter a descriptive title"/></div> 
      <TextBox set={setAbstarct} label="Abstract" placeholder="Enter a descriptive title" rows="4"/>
      <AddImage setImageUrl={setImageUrl}/>
      <div id="ArticleBox"> <TextBox set={setArticleText} label="Article Text" placeholder="Enter a 1-paragraph abstract" rows="20"/> </div>
      <LabelInput label="Tags" set={setTags} placeholder="Please add up to 3 tags to describe what your question is about e.g.,java"/>
      <PostButton handleClick={handleClick} />
    </div>
  )
}
