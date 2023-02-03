import React, { Component } from 'react'
import image4 from '../images/skills.png'
import './styles.css';

export default class Skills extends Component {
    render() {
        return (
            <div className="row" id="skills">
            <div className="col-md-4 p-0 col-sm-4 col-lg-4 col-xs-4" id="store">
               <div className="sec1-left-bg">
               <div className="text">
                  <h1 className="text-center">OUR <br/>SKILLS</h1>
                  </div>
                  <h2 className="text-center">Our set of<br/> compentencies<br/><br/></h2>
               </div>
            </div>
            <div className="col-md-8 p-0 col-sm-8 col-lg-8 col-xs-8">
               <div className="itembox2">
                  <h2>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus</h2>
                  <img src={image4}  class="img-fluid" alt="Girl in a jacket" width="100%" />
               </div>
            </div>
         </div>
        )
    }
}
