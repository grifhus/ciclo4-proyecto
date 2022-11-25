import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Outlet, Link } from "react-router-dom"
import { MdPets, MdHome, MdContactPage } from "react-icons/md"
import "../style.css"

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
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
            <Nav className="me-auto navbarflex p-3 ms-5  h3">
              <Nav.Link className="px-4 " as={Link} to="/">
                <MdHome style={{ marginBottom: "3 px " }} />
                Home
              </Nav.Link>
              <Nav.Link className="px-4 " as={Link} to="/adopta">
                <MdPets style={{ marginBottom: "3px" }} />
                Adopta
              </Nav.Link>
              <Nav.Link className="px-4 " as={Link} to="/contact">
                <MdContactPage style={{ marginBottom: "3px" }} />
                Contact
              </Nav.Link>

              <button className="white_btn" onClick={handleLogout}>Logout</button>
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
