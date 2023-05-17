import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card1 from "../../Imagenes/card_taxi.png"
import card2 from "../../Imagenes/Card_electri.png"
import card3 from "../../Imagenes/card_repu.png"
import card4 from "../../Imagenes/card_carga.png"

const handleButtonClick = () => {
    <href></href>
  };

const Servicio =()=> {
    return (
        <>
		<Container>
        <Row  className="mt-5">
          <Col sm={5} md={5} lg={6} center>
            <Card>
                <img alt="card1" src={card1} width='635'></img>
                <h2>Servicio taxi </h2>
                <p> Te ofrecemos un servicio de taxi seguro y rápido. Más información aquí </p>
                <Button variant="secondary bg-dark" as={Link} to="https://api.whatsapp.com/send?phone=3025179222" style={{color: 'white'}}>Pregúntanos</Button>
            </Card>
          </Col>
          <Col sm={6} md={200} lg={6}>
            <Card>
                <img alt="card2" src={card2} width='635'></img>
                <h2>Servicio taxi eléctrico</h2>
                <p>Te ofrecemos un servicio de taxi 100% eléctrico y amigable con el ambiente. Más información aquí</p>
                <Button variant="secondary bg-dark" as={Link} to="https://api.whatsapp.com/send?phone=3025179222" style={{color: 'white'}}>Pregúntanos</Button>
            </Card>
          </Col>
        </Row>
        <Row  className="mt-5">
          <Col sm={6} md={200} lg={6} center>
            <Card>
                <img alt="card3" src={card3} width='635'></img>
                <h2>Servicio automotriz</h2>
                <p> Te ofrecemos servicios de alineación y balanceo, servicio de frenos, cambio de aceite, mecánica rápida, lubricantes, baterías y llantas. Más información aquí</p>
                <Button variant="secondary bg-dark" as={Link} to="https://api.whatsapp.com/send?phone=3025179222" style={{color: 'white'}}>Pregúntanos</Button>
            </Card>
          </Col>
          <Col sm={6} md={200} lg={6}>
            <Card>
                <img alt="card4" src={card4} width='635'></img>
                <h2>Servicio de carga</h2>
                <p> Te ofrecemos servicio de carga en caso de que necesites transportar pesos pesados. Más informacion aquí </p>
                <Button variant="secondary bg-dark" as={Link} to="https://api.whatsapp.com/send?phone=3025179222" style={{color: 'white'}}>Pregúntanos</Button>
            </Card>
          </Col>
        </Row>
      </Container>
        </>  
    )
}

export default Servicio