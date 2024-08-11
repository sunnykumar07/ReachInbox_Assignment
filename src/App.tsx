
import { BrowserRouter, Route, Routes } from "react-router-dom"
import OneBox from "./pages/OneBox"
import Login from "./pages/Login"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
