import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import CardUser from '../ui/CardUser'
import { useEffect, useState } from 'react'

// const users = [{
//   id: 1,
//   name: "fdsafdsf",
//   email: "fg@gmail",
//   photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmfF00-q6JffFrYIExZ6aucRIFx3sJFBEtA&usqp=CAU"
// },
// {
//   id: 2,
//   name: "dfdg",
//   email: "dfdg@gmail",
//   photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmfF00-q6JffFrYIExZ6aucRIFx3sJFBEtA&usqp=CAU"
// }
// ]

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