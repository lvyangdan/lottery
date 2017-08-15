import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
class CarouselInstance extends React.Component{
  render(){
    return(
      <div className='carousel'>
        <Carousel>
    <Carousel.Item>
      <img width={400} height={100} alt="900x500" src={img1}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={400} height={100} alt="900x500" src={img2}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={400} height={100} alt="900x500" src={img3}/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
    )
  }
}


export default CarouselInstance