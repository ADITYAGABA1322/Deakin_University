import React,{useEffect, useState,lazy,Suspense} from 'react'
import {getFirestore,collection, getDocs,} from 'firebase/firestore'
import { GetArticles } from './firebase'
import Filter from './Filter'


export default function FindArticles() {
  const ArticleCard=lazy(()=>import( './ArticleCard'))
  const[articles,setArticles]=useState([])
  const updateList=async()=>{
    console.log("Updating LISt")
    const val= await GetArticles()
    setArticles(val)
  }
    useEffect(()=>{
   updateList()
     },[])  
  return (
    <div >
      <div>
      <h1>Find Articles</h1>
      </div> 
        <div classNameName="col"></div>
        <Suspense fallback={<div>Articles Loading...</div>}>
        {articles.map((article,i)=>{
           return (
            <ArticleCard title={article.Title} abstract={ article.Abstract} desc={article.ArticleText}  tags={article.Tags} id={article.id} date={article.Date} author={article.Author} index={i}/>
          );
        })}  
        </Suspense>
       
    </div>
  )
}
