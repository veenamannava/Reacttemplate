import React, { Component } from 'react'
import image2 from '../images/study.png'

export default class Solutions extends Component {
    render() {
        return (
          
            <div className="row p-0">
            <div className="col-md-4 p-0 col-sm-4 col-lg-4 col-xs-4">
               <div className="sec1-left-bg">
               <div className="text">
                  <h1 className="text-center">What <br/>
                     We
                     <br/>
                     DO
                  </h1>
                  </div>
                  <h2 className="text-center"> our study
                     solutions
                  </h2>
              
               </div>
            </div>
            <div className="col-md-8 p-0 col-sm-8 col-lg-8 col-xs-8">
               <div className="sec1-right-bg p-5">
                  <h1 className="mb-6">Our <span style={{color:"#d41e5b"}}>AI/ML solutions</span> to address your business needs</h1>
                  <div className="row">
                     <div className="col-md-12 col-sm-12 col-lg-6 col-xs-12">
                        <div className="icon-bx d-flex flex-nowrap">
                           <div className="ibx">
                              <img  alt=" " className="img-fluid"src={image2}/>
                           </div>
                           <div className="cntbx">
                              <h4>Object Detection</h4>
                              <p>Detect instances of Objects of a certain class (such as humans, buildings, or cars)
                                 in digital
                                 images and videos.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-12 col-lg-6 col-xs-12">
                        <div className="icon-bx d-flex flex-nowrap">
                           <div className="ibx">
                              <img alt=" "className="img-fluid" src={image2} />
                           </div>
                           <div className="cntbx">
                              <h4>Object Detection</h4>
                              <p>Detect instances of Objects of a certain class (such as humans, buildings, or cars)
                                 in digital
                                 images and videos.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-12 col-lg-6 col-xs-12">
                        <div className="icon-bx d-flex flex-nowrap">
                           <div className="ibx">
                              <img alt=" "className="img-fluid" src={image2} />
                           </div>
                           <div className="cntbx">
                              <h4>Object Detection</h4>
                              <p>Detect instances of Objects of a certain class (such as humans, buildings, or cars)
                                 in digital
                                 images and videos.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-12 col-sm-12 col-lg-6 col-xs-12">
                        <div className="icon-bx d-flex flex-nowrap">
                           <div className="ibx">
                              <img  alt=" " className="img-fluid" src={image2} />
                           </div>
                           <div className="cntbx ">
                              <h4>Object Detection</h4>
                              <p>Detect instances of Objects of a certain class (such as humans, buildings, or cars)
                                 in digital
                                 images and videos.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
        )
    }
}
