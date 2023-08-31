import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home.jsx'
import Page404 from './components/pages/Page404.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Products from './components/pages/Products.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/quem-somos' element={<About/>} />
      <Route path='/produtos' element={<Products/>}/>
      <Route path='/contato' element={<Contact/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}

export default App