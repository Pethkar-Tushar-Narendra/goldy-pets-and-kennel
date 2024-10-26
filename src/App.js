import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleDog from "./pages/SingleDog"
import SingleCat from "./pages/SingleCat"
import { useState } from "react"

function App() {
  const [pet,setPet]=useState('dog');
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home pet={pet} setPet={setPet}/>}></Route>
          <Route path="/dog/:name" element={<SingleDog />}></Route>
          <Route path="/cat/:name" element={<SingleCat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
