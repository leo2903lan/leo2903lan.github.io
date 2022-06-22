import React from "react";
import { Carousel } from "react-bootstrap";
import '../styles/carrossel.css';

function Carrossel() {
  return (
    <div className="carrossel">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vetores-gratis/retrato-de-programador-trabalhando-com-pc_23-2148222501.jpg?w=740&t=st=1655865628~exp=1655866228~hmac=19ea850e48f46b831b024cac994e4e5d711f06caa909142c27d9a042e9a1a38c/"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vetores-gratis/conceito-de-programadores-com-design-plano_23-2147856685.jpg?w=740&t=st=1655865618~exp=1655866218~hmac=9b4b4fd2bdc4a2860b94e8de5fe12c9ed618905ebdb7aaa26041c4d16ce9cb31"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vetores-gratis/conceito-de-programadores-com-design-plano_23-2147856686.jpg?w=740&t=st=1655865620~exp=1655866220~hmac=eb4288c7da800c8b23ab4be397b7b467117f5eb8229a7834187a3a9bb3d73e1b"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrossel;
