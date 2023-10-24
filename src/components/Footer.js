import React from 'react'
import'./Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    
   <div  className='footerbox'>
    <div className='upperfooter'>
      <div id='explorecol'>
        <h2>Explore</h2>
        <ol>
            <li><Link  style={{color: 'black'}} to='/'>Home</Link></li>
            <li><Link style={{color: 'black'}} to='/postpage'>Post</Link></li>
            <li><Link  style={{color: 'black'}} to='/FindQuestion'>Find Questions</Link></li>
            <li><Link style={{color: 'black'}} to='/FindArticle'>Find Articles</Link></li>
        </ol>
      </div>
      <div id='supportcol'>
        <h2>Support</h2>
        <ol>
            <li><Link style={{color: 'black'}} to='https://accommodation.deakin.edu.au/faq'>FAQs</Link></li>
            <li><Link style={{color: 'black'}} to='https://www.deakin.edu.au/students/help'>Help</Link></li>
            <li><Link style={{color: 'black'}} to='https://www.deakin.edu.au/help-hub'>Contact Us</Link></li>
        </ol>
      </div>
      <div id='contactcol'>
        <h2>Stay connected</h2>
        <span className='logos'>
        <Link style={{color: 'black'}} to='https://www.facebook.com/DeakinUniversity/'> <img id='logo1' src={require('./facebook.png')} alt="fb logo" /></Link>
        <Link style={{color: 'black'}} to='https://twitter.com/deakin'> <img  id='logo3' src={require('./twitter.png')} alt="twitter logo" /></Link>
        <Link style={{color: 'black'}} to='https://www.instagram.com/deakinuniversity/'>  <img id='logo2'  src={require('./instagram.png')} alt="insta logo" /></Link>
        </span>
      </div>
    </div>
    <div className='lowerfooter'>
        <h2>DEV@Deakin 2022</h2>
        <span> <Link style={{color: 'black'}} to='https://www.deakin.edu.au/footer/privacy'>Privacy Policy</Link></span>
        <span><Link style={{color: 'black'}} to='https://www.deakin.edu.au/about-deakin/locations/campuses/safety-and-security'>Safety & Security</Link></span>
        <span><Link style={{color: 'black'}} to='https://policy.deakin.edu.au/view.current.php?id=00084'>Code of Conduct</Link></span>
      </div>
      <div>
      </div>
   </div>  
    

  )
}
