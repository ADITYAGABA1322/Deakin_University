import React ,{useState ,lazy,Suspense} from 'react'
import LoadingBar from 'react-top-loading-bar'


export default function TechNews(){
  const News=lazy(()=>import( './News'))
    const  apiKey=process.env.REACT_APP_NEWS_API
     const[progress,setProgress]=useState(0);
    
        return (
          <div>
            <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          /> <div className="text-center">
          <h1>Top Technology Headlines</h1>
       
        </div>
          <Suspense fallback={<div>News Articles Loading...</div>}>
           <News apiKey={apiKey} setProgress={setProgress} key="tech" pagesize={6} country={"in"} category={"technology"}/>
          </Suspense>
          </div>
        
        )
    }