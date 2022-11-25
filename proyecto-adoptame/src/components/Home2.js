import React,{useEffect} from "react";
import Carousel from "react-bootstrap/Carousel"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home2 = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])
  return (
    <main>
          <Carousel className="info">
      <Carousel.Item>
        <img
          className=" w-100  carru "
          src="./img/1.jpg"
          alt="Adopta"
        />
        <Carousel.Caption>
          <h3 className="display-1">Adopta.</h3>
          <p className="h3">Adoptar una mascota que ha sido víctima de maltrato o abandono es un acto de amor y la oportunidad perfecta para enseñarle a sus hijos los valores de la responsabilidad, el cuidado, la compasión y el significado del amor incondicional y verdadero que esta mascota les puede brindar creando vínculos muy fuertes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carru" 
          src="./img/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="display-1">Donación única.</h3>
          <p className="h3">Tu apoyo es muy importante para seguir brindando segundas oportunidades. Si tienes preguntas o quieres información adicional, puedes escribirnos a nuestra línea de whatsapp (57) XXXXXXXXX.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carru"
          src="./img/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="display-1">Plan Apadrina y Deja Huella.</h3>
          <p className="h3">
          Apadrinar consiste en crear un vinculo con alguno de nuestros animales rescatados y sentir que eres parte de su vida.​Ayudarás a cubrir parte de su manutencion con una cuota mensual y recibiras en tu correo electronico un informe detallado de lo que hacemos en la fundacion.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

      <div className="row featurette info" data-aos="fade-right">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1  text-primary  display-2">
            Misión{" "}
          </h2>
          <p className="parrafo ">
            La fundación Adóptame, es una entidad sin ánimo de lucro,
            comprometida con promover mediante diferentes actividades la
            adopción responsable, la conciencia de esterilizar y recuperar
            animales en condición de maltrato y abandono con el fin de enseñar,
            contribuir y entregar una calidad de vida a todos los perros y gatos
            que lo necesiten.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
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
        </div>
      </div>

      <div className="row featurette info" data-aos="fade-left">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1 text-primary display-2 ">Visión</h2>
          <p className=" parrafo">
            Queremos ser reconocidos a nivel regional por el impacto generado no
            solo a todos aquellos animales que fueron rescatados, sino a toda la
            sociedad por generar conocimiento y consciencia acerca de la
            importancia de esterilizar, y de la responsabilidad de tener un
            perro y/o gato en nuestro hogar.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title >Visión</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
            <image
              className="img-fluid "
              href="/img/vision.jpg"
              width="500px"
              height="350px"
            />
          </svg>
        </div>
      </div>

      <div className="row featurette" data-aos="zoom-in">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1 text-primary display-4 ">
            Cifras<span className="text-muted"> al final de 2021:</span>
          </h2>
          <p className="parrafo parrafo">
            Más de 1054 perros y gatos rescatados, recuperados, rehabilitados y
            entregados en adopción responsable. Más de 15.069 animalitos
            esterilizados, atendidos y ayudados. Más de 600 campañas educativas
            sobre tenencia responsable y sensibilización con comunidades,
            empresas y colegios.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="350"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Cifras</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
            <image
              className="img-fluid "
              href="/img/cifras.jpg"
              width="500px"
              height="350px"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}


export default Home2
