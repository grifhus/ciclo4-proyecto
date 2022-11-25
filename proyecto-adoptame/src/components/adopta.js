import React, { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"
import initialCard from "../Assets/cards"
import AOS from 'aos';
import 'aos/dist/aos.css';


// const initialCard = [
//   {
//     id: 1,
//     tipo: "Perro",
//     nombre: "Pascual",
//     observacion:
//       "Muy juguetón, amigable y cariñoso. En este momento se encuentra totalmente recuperado y en busca de un hogar responsable que le brinde todo el amor que merece.",
//     rasgos: "Tiene el pelo cafe, ademas tiene una patica mala",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/07/Tambo-65-600x800.jpeg",
//   },
//   {
//     id: 2,
//     Tipo: "Perro",
//     nombre: "Sacha",
//     observacion:
//       "Busco una familia que ame las aventuras como yo y que esté dispuesta a recibir mucho amor de mi parte porque soy un peludo que ama de forma incondicional.",
//     rasgos: "Es un perro criollo y tiene un ojo spr herido",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/08/Coyote-2-600x800.jpg",
//   },
//   {
//     id: 2,
//     Tipo: "Perro",
//     nombre: "Sacha",
//     observacion:
//       "Busco una familia que ame las aventuras como yo y que esté dispuesta a recibir mucho amor de mi parte porque soy un peludo que ama de forma incondicional.",
//     rasgos: "Es un perro criollo y tiene un ojo spr herido",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/08/Coyote-2-600x800.jpg",
//   },
//   {
//     id: 1,
//     tipo: "Perro",
//     nombre: "Pascual",
//     observacion:
//       "Muy juguetón, amigable y cariñoso. En este momento se encuentra totalmente recuperado y en busca de un hogar responsable que le brinde todo el amor que merece.",
//     rasgos: "Tiene el pelo cafe, ademas tiene una patica mala",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/07/Tambo-65-600x800.jpeg",
//   },
//   {
//     id: 1,
//     tipo: "Perro",
//     nombre: "Pascual",
//     observacion:
//       "Muy juguetón, amigable y cariñoso. En este momento se encuentra totalmente recuperado y en busca de un hogar responsable que le brinde todo el amor que merece.",
//     rasgos: "Tiene el pelo cafe, ademas tiene una patica mala",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/07/Tambo-65-600x800.jpeg",
//   },
//   {
//     id: 2,
//     Tipo: "Perro",
//     nombre: "Sacha",
//     observacion:
//       "Busco una familia que ame las aventuras como yo y que esté dispuesta a recibir mucho amor de mi parte porque soy un peludo que ama de forma incondicional.",
//     rasgos: "Es un perro criollo y tiene un ojo spr herido",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/08/Coyote-2-600x800.jpg",
//   },
//   {
//     id: 3,
//     Tipo: "Perro",
//     nombre: "Oreo",
//     observacion: "Hoy en día se encuentra dispuesto a encontrar un hogar amoroso y responsable que quiera darle una segunda oportunidad.",
//     rasgos: "Pelo blanco con cafe",
//     img: "https://www.adoptanocompres.org/wp-content/uploads/2022/09/CocoM-1-400x533.jpeg",
//   },
// ]

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
