import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import Footer from '../layout/Footer'



const Products = () => {
    return (
        <>
            <Header/>
                <div id='main'>
                    <Content>
                        <h1>Produtos</h1>
                    </Content>
                    <Sidebar/>
                </div>
            <Footer/>
        </>
    )
}


export default Products