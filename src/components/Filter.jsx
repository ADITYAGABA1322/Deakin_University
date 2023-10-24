import React ,{useState}from 'react'
import { GetQuestions } from './firebase'

export default function Filter(props) {
    const[date,setDate]=useState('')
    const[tag,setTag]=useState('')
    const[title,setTitle]=useState('')
     const handleClick=async()=>{
        console.log("Call ME")
        const data= await GetQuestions()
        console.log(data);
        const filteredData = data.filter(item => {
            // Filter by tag
            if (tag && !item.Tags.includes(tag)) {
              return false;
            }
          
            // Filter by date
            if (date && !item.Date.includes(date)) {
              return false;
            }
          
            // Filter by title
            if (title && !item.Title.includes(title)) {
              return false;
            }
          
            return true; 
          });
        //   console.log(filteredData );
       await  props.setQuestions(filteredData);
    }
 
  return (
        
    <div >
      <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="btn btn-danger" style={{marginLeft:'10px'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        Filter
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse ">
      <div className="accordion-body my-3">
        <div className='flex' style={{ "list-style-type": "none" ,display:'flex'}}>
        
            <div className=" my-3 " >
            <li>
               <label className=" mx-1" id='Date'>Date</label>
               <input for='Date' onChange={(e)=>{setDate(e.target.value)}} value={date} type="date" />  
            </li>
            </div>
           
            <div className=" my-3" >
            <li>
               <label className=" mx-2"  id='Tag'>Tag</label>
               <input for='Tag'onChange={(e)=>{setTag(e.target.value)}} value={tag} type="text" />  
            </li>
            </div>
            <div className="my-3 mx-1" >
            <li>
               <label className=" mx-2"  id='Question '>Question Title</label>
               <input for='Question' onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" />  
            </li>
            </div>    
       <button  onClick={(e)=>handleClick()}class="btn btn-danger mx-3 my-4" style={{height:'60px', width:'100px'}} type="button" >
          Apply Filter
      </button>
       <button  onClick={(e)=>handleRemove()}class="btn btn-danger my-4" style={{height:'60px', width:'100px'}} type="button" >
          Remove Filter
      </button>
        </div>     
      </div>
    </div>
  </div>
    </div>
  )
}
