import Carousel from 'react-bootstrap/Carousel';
import advert1 from '../../images/uccbimages/advert1.jpeg';
import advert2 from '../../images/uccbimages/advert2.jpeg';
import advert3 from '../../images/uccbimages/advert3.jpeg';
import '../../Homepage.css'


const CarouselF =()=> {
  return (
    <Carousel fade>
      <Carousel.Item>
      <div className="col-image-sisters"></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
      <div className="col-image-advert2"></div>
      
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="col-image-advert3"></div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselF;