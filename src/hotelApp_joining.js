import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Booking from "./pages/Booking"
import Navigation from "./pages/Navigation"

function App() {
  return (
  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <footer>Footer</footer>

  </BrowserRouter>
  );
}

export default App;