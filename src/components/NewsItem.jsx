import React from 'react'

const NewsItem=(props)=> {
  
   let {title,desc,url,newsurl,author,date,source}=props
    return (
      <div className='container my-3'>
      <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
 <span  className=" badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
      </div>
     
  <img src={url?url:"https://th.bing.com/th/id/OIP.PUu5u2axuMPu0F5h6Sqy7gHaEK?pid=ImgDet&rs=1"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btm-sm  btn-primary">Read More...</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
