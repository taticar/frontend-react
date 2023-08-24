import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home.jsx'
import Page404 from './components/pages/Page404.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}

export default App