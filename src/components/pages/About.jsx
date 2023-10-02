import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import CardUser from '../ui/CardUser'
import { useEffect, useState } from 'react'
import  Button  from 'react-bootstrap/Button'

const About = () => {

  const[users, setUsers] = useState([])

  useEffect(() => {

    const getUsers =  async () => {
      const response = await fetch('http://localhost:3300/user/list')
      const data = await response.json()
      setUsers(data.user)
    }
    getUsers()
  }, [])
  return (
    <>
      <Header />
      <div id='main'>
        <Content>
          <h1>Quem Somos</h1>
          <Button as="button" variant="primary">Cadastrar usuário
          </Button>
          {
            users.length > 0 ? users.map((user) => {
              return <CardUser key={user.id} user={user}/>
            }): null
          }
        </Content>
        <Sidebar />
      </div>
      <Footer />
    </>
  )
}

export default About