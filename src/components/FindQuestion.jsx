import React,{useEffect, useState,Suspense,lazy} from 'react'
import {getFirestore,collection, getDocs,} from 'firebase/firestore'
import { GetQuestions, db } from './firebase'
import Filter from './Filter'


export default function FindQuestion(props) {
  const QuestionCard=lazy(()=>import( './QuestionCard'))
  const[questions,setQuestions]=useState([])
  const updateList=async()=>{
    console.log("Updating LISt")
    const val= await GetQuestions()
    setQuestions(val)
  }
    useEffect(()=>{
   updateList()
     },[])  
  return (
    <div >
      <div>
      <h1>Find Questions</h1>
      <Filter setQuestions={setQuestions}/>
      </div>
        <div classNameName="col"></div>
        <Suspense fallback={<div>Question Loading...</div>}>
        {questions.map((question,i)=>{
           return (
            <QuestionCard userID={props.user?props.user.uid:""}  title={question.Title} desc={question.Problem}  tags={question.Tags} id={question.id} date={question.Date} code={question.Code}  allAnswer={ question.Answer}index={i} updateList={updateList} author={question.Author} QueId={question.userId}/>
          );
        })}
       </Suspense>
    </div>
  )
}
