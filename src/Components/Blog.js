import React, { Component } from 'react'
import image5 from '../images/slider.jpg'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import Footer from './Footer'
import NavbarComp from './NavbarComp';
import Blog1 from './Blog1'
import { useHistory } from 'react-router-dom';


 function  Blog() {
  
  const history = useHistory();

  const handleClick = () => {
      history.push("/blogdetail/Blog1")
  }
  const handleClick1 = () => {
    history.push("/blogdetails/Blog2")
}
  
    return (
      
      <div className="row">
  <div class="leftcolumn">
     {/* <div class="card"> */}
    
    
      
      <div className="fakeimg">
        
      {/* <Router>
      <Route exact path="" component={Blog1}/> */}
       
          {/* <img  id="imgClickAndChange" src="images/slider.jpg"  alt="Paris" width="100%" onclick="changeImage()"></div> --> */}
         <img className="img-fluid" src={image5} alt="Paris" width="100%"  onClick={handleClick}/>
        
                            
                        
         
         
         
        {/* </Router> */}
          
        
      </div>
     
   <div className="blog-heading">
    <h1>Sunt in culpa qui officia deserunt mollit anim .</h1>
    <h5>AI/ML, Dec 7, 2017</h5>
   </div>
    </div>
    
     {/* <div class="card"> */}
      
      <div className="fakeimg">
         <a href="<Blog1/>"> 
          <img className="img-fluid" src={image5} alt="Paris" width="100%" onClick={handleClick1}/>
         </a> 
         </div>
      
      <div className="blog-heading">
        <h1>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. 
        </h1>
        <h5>AI/ML, Dec 7, 2017</h5>
      </div>
    
    {/* <div class="card"> */}
      
        <div className="fakeimg">
          {/* <a href="file:///C:/Users/A0381/Downloads/test/test/index1.html"> */}
          <img class="img-fluid" src={image5}  alt="Paris" width="100%" onClick={handleClick}/>
        {/* </a> */}
      </div>
        <div className="blog-heading">
          <h1>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h1>
            <h5>AI/ML, Dec 7, 2017</h5>

        </div>
        
        
    
      <div className="card">
      <div className="fakeimg">
        {/* <a href="file:///C:/Users/A0381/Downloads/test/test/index1.html"> */}
        <img className="img-fluid" src={image5}  alt="Paris" width="100%" onClick={handleClick}/>
      {/* </a> */}
      </div>
      <div className="blog-heading">
        <h1>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h1>
          <h5>AI/ML, Dec 7, 2017</h5>
          
      </div>
      </div>
      <Footer/>
      </div>
      
        
        )
    }

export default Blog;
