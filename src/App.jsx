import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Page404 from "./components/pages/Page404"
import Contact from "./components/pages/Contact"
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Initializer from "./components/others/Initializer"

const App = () => {
  return (
  <>
    <Initializer />
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/quem-somos' element={<About/>} />

      <Route path='/contato' element={<Contact/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
  </>
  )
}

export default App;