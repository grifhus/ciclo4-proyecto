import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Outlet, Link } from "react-router-dom"
import { MdPets, MdHome, MdContactPage } from "react-icons/md"

const NavBar = () => {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="./adoptame.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <MdHome style={{ marginBottom: "3px" }} />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/adopta">
                <MdPets style={{ marginBottom: "3px" }} />
                Adopta
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <MdContactPage style={{ marginBottom: "3px" }} />
                Contact
              </Nav.Link>
              <Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}
export default NavBar
