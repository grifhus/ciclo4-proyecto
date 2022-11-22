import "./App.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
//Importamos los componentes creados
import Adopta from "./components/Adopta"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./layouts/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  const user = localStorage.getItem("token")

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        {user && <Route path="/" exact element={<Home />} />}
        {user &&  <Route path="adopta" element={<Adopta />} />}
        {user &&  <Route path="contact" element={<Contact />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
