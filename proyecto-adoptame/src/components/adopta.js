import React, { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"
import initialCard from "../Assets/cards"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Adopta = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])
  const [card, setCard] = useState(initialCard)
  return (
    <Container className="cards">
  
      {card.map((product) => (
        <div key={product.id}>
          {/* <div>
              <img
                alt={product.Tipo}
                src={product.img}
                
                width="100"
                height="100"         
              />
            </div>
            <div>
              <h3>{product.nombre}</h3>
              <p>{product.observacion}</p>
            </div> */}
          <Card className="box-shadow" style={{ width: "18rem" }} data-aos="flip-down">

            <Card.Img
              variant="top"
              src={product.img}
              width="100"
              height="250"
            />
            <Card.Body>
              <Card.Title className=" text-black">{product.nombre}</Card.Title>
              <Card.Text className=" text-black">
                {product.observacion}
              </Card.Text>
              <Button variant="primary">Adoptame</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
     
    </Container>
    
  )
 
}

export default Adopta
