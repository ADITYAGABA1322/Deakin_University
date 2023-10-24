import React from 'react'
import GetAllAnswer from './GetAllAnswer'

export default function DisplayAnswer(props) {
    let{allAnswer}=props
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="col">
        <div className=' justify-content-center  '>
         <div className="mx-2"><h3>Solutions</h3> </div> 
        {allAnswer.map((answer,i)=>{

           return (
             <ol class="list-group list-group-numbered">
               <GetAllAnswer content={answer} index={i}/>
                </ol>
          );
        })}
        </div>
    
        </div>

  </div>
  )
}
