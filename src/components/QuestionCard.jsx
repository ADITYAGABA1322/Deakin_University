import React,{useState} from 'react'

 
import { deleteHandler, updateQuestion } from './firebase'
import DisplayAnswer from './DisplayAnswer';

export default function QuestionCard(props) {
  const[answer,setAnswer]=useState('');
    let {title,desc,tags,date,allAnswer,code}=props
    const[answerlist,SetAnswerList]=useState(allAnswer)
    const setlist=()=>{
     const add=answerlist.concat(answer);
     SetAnswerList(add);
    }
    return (
      <div className="card my-5" >
        <h3 className='mx-2'>Question{props.index+1}</h3>
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
 <span  className=" badge rounded-pill bg-danger">
    {tags}
    <span className="visually-hidden">unread messages</span>
  </span>
      </div>
  <div className="card-body" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={`#i${props.index}`}>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <p className="card-text">{code}</p>
    <p className="card-text">Posted By-{props.author}</p>
    <p className="card-text"><small className="text-muted">Date: {date}</small></p>
    {props.userID===props.QueId?<button  onClick={async()=>{await deleteHandler(props.id);  window.location.href = '/FindQuestion'  }}  target="_blank" className="btn btm-sm  btn-primary my-3  mx-1">Delete</button>:""}
  </div>

  <div id={`i${props.index}`}  className="accordion-collapse collapse">
      <div className="accordion-body">
      <div className=" container mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Your Answer</label>
   <textarea  onChange={(e)=>{setAnswer(e.target.value)}} value={answer} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   <button onClick={()=>{setlist();updateQuestion(props.id,answer);setAnswer('');}} className="btn btn-primary my-5 mx-3">Post</button>
</div>
      </div>

      <DisplayAnswer allAnswer={answerlist}/>

    </div>

</div>
      
    )
}
