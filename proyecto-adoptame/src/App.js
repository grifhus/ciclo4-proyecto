import "./App.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
//Importamos los componentes creados
import Adopta from "./components/adopta"
import Contact from "./components/contact"
import Home from "./components/home"
import NavBarExample from "./layouts/navbar"

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
    </div>
  )
}

export default App
