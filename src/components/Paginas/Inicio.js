import img1 from "../../Imagenes/img1.jpeg"
import img2 from "../../Imagenes/img2.jpeg"
import img3 from "../../Imagenes/img3.jpeg"
import { Carousel } from 'react-bootstrap';

const Inicio =()=> {
    return (
          <Carousel>
            <Carousel.Item style={{height:"80vh"}}>
              <img
                className="d-block w-100"
                src={img1}
                alt="Primera imagen"
              />
            </Carousel.Item>
            <Carousel.Item style={{height:"85vh"}}> 
              <img
                className="d-block w-100"
                src={img2}
                alt="Segunda imagen"
              />
            </Carousel.Item>
            <Carousel.Item style={{height:"80vh"}}> 
              <img
                className="d-block w-100"
                src={img3}
                alt="Tercera imagen"
              />
              <Carousel.Caption>
                <h3>Servicios</h3>
                <p>Todos los servicios para ti</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }

export default Inicio;
 