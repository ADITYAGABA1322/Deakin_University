import React, { useState } from 'react';
import LabelInput from './LabelInput';
import TextBox from './TextBox';
import Title from './Title';
import './Question.css';
import { storeQuestiondata } from './firebase';
import PostButton from './PostButton';
import PostHeading from './PostHeading';
import { useNavigate } from 'react-router-dom';
import { Controlled as CodeMirror } from 'react-codemirror2'; // Import CodeMirror
import ReactMarkdown from 'react-markdown'; // Import React Markdown
import CodePost from './CodePost';

export default function Question(props) {
  const[title,setTitle]=useState('');
  const[problems,setProblems]=useState('');
  const[code,setCode]=useState('');
  const navigate=useNavigate()
  const[tags,setTags]=useState('');
 const  handleClick=async()=>{
   if(title===""||problems===""||tags==="")alert("Please fill all the Fields")
   else {await storeQuestiondata(title,problems,tags,code,props.author,props.userId);
  alert("Question Posted SuccessFully");}
  navigate('/FindQuestion')
   }
  return (
    <div>
    <div>
      <PostHeading content="What do you want to ask or share" />
       <div  id="QueTitle"> <Title set={setTitle}  placeholder="Start your Question with What ,Why ,etc"/> </div> 
      <TextBox  set={setProblems} label="Describe your problem" rows="25"/>
      <CodePost setCode={setCode}/>
      <div id="QueInput" > <LabelInput set={setTags} label="Tags"  placeholder="Please add up to 3 tags to describe what your question is about e.g.,java"/> </div>
      <PostButton handleClick={handleClick}/>
    </div>
    </div>
      
  )
}
