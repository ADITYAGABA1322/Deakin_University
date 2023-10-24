 import React,{useState} from 'react'
import './AddImage.css'
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import {v4} from "uuid"
import{storage,app} from './firebase'

export default function AddImage(props) {
    const [image,setImage]=useState("")
    const [imgSource,setimgSource]=useState("")
    const [text,setText]=useState("")

    const uploadImage=async(image)=>{
      if(image!==""){
        const imageRef = ref(storage, `images/${image.name+v4()}`);
        if(image==null) return;
        await uploadBytes(imageRef, image).then((snapshot) => {
          console.log('Uploading Image!');
          getDownloadURL(imageRef)
          .then((url)=>{
            setimgSource(url)
            props.setImageUrl(url)
          })
          .catch((e)=>{
            alert("Fail to Upload");
          })
        });
        setText("Image Uploaded SuccessFully ")
      }
    else alert("Upload Fail,Insert an Image First")
      }
  return (
    <>
    <div className='contain'>
      <label htmlFor="">Add an image:</label>
      <div className='uploadedImage' style={{width:'300px', height:'auto', margin:'10px', marginTop:'2px', marginRight:'100px'}}>
      <img className='imge'  src={imgSource} alt='' />
      </div> 
      <div style={{diplay:'flex'}}>
      <input type="file"  className='imageupload' onChange={(e)=>{setImage(e.target.files[0]);setText("Image Selected")}} id='fileInp' accept='image/png,image/jpeg' />
      <label className='btn btn-secondary my-2'htmlFor='fileInp'>Browse</label>
      <br/>
      < input  className='btn btn-secondary ' type='button' value='Upload' placeholder='hill' onClick={()=>{uploadImage(image);setText(image===""?"":"Image Uploading...")}}/>
      </div> 
      <br />
    </div>
      <p style={{textAlign:"center" ,color:'blue'}}>{text}</p> 
      </>  
  )
}

