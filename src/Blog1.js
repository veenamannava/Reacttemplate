import React, { Component } from 'react'
import image6 from '../images/slider.jpg'

export default class Blog1 extends Component {
    render() {
        return (
            <div className="row">
  <div className="leftcolumn">
     <div className="card"> 
      
      
      <div className="fakeimg1">
          {/* <img  id="imgClickAndChange" src="images/slider.jpg"  alt="Paris" width="100%" onclick="changeImage()"></div>  */}
         <img className="img-fluid" src={image6} alt="Paris" width="100%" /></div>
         <div className="blog-heading">
   
      <h1>Sunt in culpa qui officia deserunt mollit anim .</h1>
      <h5>AI/ML, Dec 7, 2017</h5>
    </div>
    </div>
    
    <div className="footer">
        <h2 className="footer-content">Footer</h2>
      </div>
      </div>
      </div>
        )
        
    }
    
}