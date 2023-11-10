import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

const App = () => {
  const [ cart, setCart ] = useState([]);
  const handleAddToCart = (e) => {
    setCart([...cart, e.target.parentNode.id])
  }
  
  const contextProps = {cart, setCart, handleAddToCart};

  return (
    <div className="App">
      <Navbar cart={cart}/>
      <div className="content">
        <Outlet context={[contextProps]}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
