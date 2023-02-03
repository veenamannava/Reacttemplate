import React, { Component } from 'react'
import './styles.css';
import image from '../images/slide.png'
import image1 from '../images/Slide2.png'
import Carousel from 'react-bootstrap/Carousel'

export default class Carousel1 extends Component {
    render() {
        return (
          <div className="row">
              <div className="wrapper"> 
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
       </Carousel.Item>
      
    </Carousel>
    </div>
     </div>


        )
    }
}