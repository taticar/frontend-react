import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import Footer from '../layout/Footer'


const Page404 = () => {

  return (
    <>
      <Header />
      <div id='main'>
        <Content>
          <h1>Página não encontrada</h1>
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default Page404