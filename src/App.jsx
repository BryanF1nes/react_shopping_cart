import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
