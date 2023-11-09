import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  const [ cart, setCart ] = useState([]);
  const handleAddToCart = (e) => {
    setCart([...cart, e.target.parentNode.id])
  }
  
  const contextProps = {cart, handleAddToCart};

  return (
    <div className="App">
      <Navbar cart={cart}/>
      <div className="content">
        <Outlet context={[contextProps]}/>
      </div>
    </div>
  )
}

export default App
