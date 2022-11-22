import Carousel from "react-bootstrap/Carousel"
import { Container, Row, Col } from "react-bootstrap"
import Footer from "../components/Footer"


const Home = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div>
      {/*
 <Container>
        <Row>
          <Col md="7">
            <h2 className="featurette-heading fw-normal lh-1  text-primary mt-5">
              Misión{" "}
            </h2>
            <p className="lead">
              La fundación Adóptame, es una entidad sin ánimo de lucro,
              comprometida con promover mediante diferentes actividades la
              adopción responsable, la conciencia de esterilizar y recuperar
              animales en condición de maltrato y abandono con el fin de
              enseñar, contribuir y entregar una calidad de vida a todos los
              perros y gatos que lo necesiten.
            </p>
          </Col>
          <Col md="5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-3"
              width="500"
              height="350"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x350"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Misión</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
              <image
                className="img-fluid "
                href="/img/6.jpg"
                width="500px"
                height="350px"
              />
            </svg>
          </Col>
        </Row>
      </Container>
      <hr className="featurette-divider" />
      <Row>
        <Col md="7">
          <h2 className="featurette-heading fw-normal lh-1 text-primary">
            Visión
          </h2>
          <p className="lead">
            Queremos ser reconocidos a nivel regional por el impacto generado no
            solo a todos aquellos animales que fueron rescatados, sino a toda la
            sociedad por generar conocimiento y consciencia acerca de la
            importancia de esterilizar, y de la responsabilidad de tener un
            perro y/o gato en nuestro hogar.
          </p>
        </Col>
        <Col md="5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x350"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Misión</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
            <image
              class="img-fluid "
              href="/img/vision.jpg"
              width="500px"
              height="350px"
            />
          </svg>
        </Col>
      </Row> */}
      <button className="white_btn" onClick={handleLogout}></button>
      <Carousel>
      <Carousel.Item>
        <img
          className=" w-100"
          src="./img/1.jpg"
          alt="Adopta"
        />
        <Carousel.Caption>
          <h3>Adopta.</h3>
          <p>Adoptar una mascota que ha sido víctima de maltrato o abandono es un acto de amor y la oportunidad perfecta para enseñarle a sus hijos los valores de la responsabilidad, el cuidado, la compasión y el significado del amor incondicional y verdadero que esta mascota les puede brindar creando vínculos muy fuertes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Donación única.</h3>
          <p>Tu apoyo es muy importante para seguir brindando segundas oportunidades. Si tienes preguntas o quieres información adicional, puedes escribirnos a nuestra línea de whatsapp (57) XXXXXXXXX.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Plan Apadrina y Deja Huella.</h3>
          <p>
          Apadrinar consiste en crear un vinculo con alguno de nuestros animales rescatados y sentir que eres parte de su vida.​Ayudarás a cubrir parte de su manutencion con una cuota mensual y recibiras en tu correo electronico un informe detallado de lo que hacemos en la fundacion.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

    </div>
  )
}
export default Home
