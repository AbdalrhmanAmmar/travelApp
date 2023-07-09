import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"




function App() {
 

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
        <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
