import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import CardUser from '../ui/CardUser'

const users = {
  name: "fdsafdsf",
  email: "fg@gmail",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmfF00-q6JffFrYIExZ6aucRIFx3sJFBEtA&usqp=CAU"
}



const About = () => {

  return (
    <>
      <Header />
      <div id='main'>
        <Content>
          <h1>Quem Somos</h1>
          <CardUser user={user}/>
          <CardUser user={{
            nome: "Maria",
            email: "maria@gmail.com",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO4LLq9jsK36mE3uNmZLU7SM_Ftmf3OYUsQ&usqp=CAU"
          }}/>
          <CardUser/>
        </Content>
        <Sidebar />
      </div>
      <Footer />
    </>
  )
}

export default About