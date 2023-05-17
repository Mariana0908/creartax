import React from 'react';
import { Container } from 'react-bootstrap';
import footer from "../../Imagenes/footer.png"


const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container className="text-center">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <img alt="footer mt-10" src={footer} width='180'></img>
                </div>
                <div class="col">
                    <span className="text-muted">Calle 64 #52-30 sector el Chagualo-Medellín</span>
                </div>
                <div class="col">
                    <span className="text-muted">INSTAGRAM: @crear_tax</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span className="text-muted"></span>
                </div>
                <div class="col">
                    <span className="text-muted">CORREO: creartax@gmail.com</span>
                </div>
                <div class="col">
                    <span className="text-muted">CONTÁCTANOS: 302 517 9222 </span>
                </div>
            </div>
        </div>   
      </Container>
    </footer>
  );
};

export default Footer;