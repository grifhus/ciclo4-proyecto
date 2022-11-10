import "./App.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
//Importamos los componentes creados
import Adopta from "./components/Adopta"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBarExample from "./layouts/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="adopta" element={<Adopta />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
