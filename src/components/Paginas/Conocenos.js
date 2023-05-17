import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Conocenos = () => {
  const handleClick = () => {
    alert('¡Haz clic en el botón!');
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '20px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div style={{ backgroundColor: '#ffc107', color: '#fff', padding: '20px', marginBottom: '20px', border: '1px solid #ffc107' }}>
              <h2 style={{ color: '#fff' }}>Quiénes somos</h2>
              <p style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                Creartax surgió de una idea de un integrante de un grupo de amigos taxistas. Esta idea se ha difundido a través del boca a boca, alcanzando a 106 personas que forman parte de este proyecto en constante crecimiento.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <div style={{ backgroundColor: '#ffc107', color: '#fff', padding: '20px', marginBottom: '20px', border: '1px solid #ffc107' }}>
              <h2 style={{ color: '#fff' }}>Misión</h2>
              <p style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                Nuestra misión es elevar el nivel de experiencia, comodidad y buen servicio al usuario mediante el uso del transporte público tipo taxi, garantizando confianza a la hora de cambiar el aceite de su vehículo, las llantas y la alineación.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div style={{ backgroundColor: '#ffc107', color: '#fff', padding: '20px', marginBottom: '20px', border: '1px solid #ffc107' }}>
              <h2 style={{ color: '#fff' }}>Visión</h2>
              <p style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                Convertirnos en la mejor empresa de taxis, brindando un servicio excelente con honestidad, amabilidad y respeto al usuario. Esta honestidad también se verá reflejada en el cambio de aceite, cambio de llantas y alineación de vehículos.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div style={{ backgroundColor: '#ffc107', color: '#fff', padding: '20px', marginBottom: '20px', border: '1px solid #ffc107' }}>
              <h2 style={{ color: '#fff' }}>Objetivos</h2>
              <p style={{color: 'rgba(0, 0, 0, 0.7)'}}>
              -Mantener o aumentar la rentabilidad del negocio. <br />
                -Obtener mayor productividad. <br />
                -Ofrecer un excelente servicio al cliente. <br />
                -Mantener los valores fundamentales de la empresa.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Conocenos;