import React from 'react'
import './PostType.css'
import TypeSelector from './TypeSelector'
import Post from './Post'

export default function PostType(props) {
  let buttonstate=(value)=>{
    props.setState(value);
  }
  return (
    <>
   <div className='POSTTYPE'>
        <p>Select Post Type: </p> 
      <TypeSelector  buttonstate={ buttonstate}  value="1" label={'Question'}/>
      <TypeSelector buttonstate={ buttonstate}   value="2" label={'Article'}/>
      {/* <TypeSelector buttonstate={ buttonstate}   value="3" label={'FindQuestion'}/> */}
    </div>

    </>
    
  )
}
