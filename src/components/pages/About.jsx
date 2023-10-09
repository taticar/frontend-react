import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import CardUser from '../ui/CardUser'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const About = () => {

  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    const getUsers = async () => {
      const response = await fetch('http://localhost:3300/user/list')
      const data = await response.json()
      setUsers(data.user)
    }
    getUsers()
  }, [])

  // função para envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      pass: e.target.pass.value,
      photo: e.target.photo.value
    }

    const response = await fetch('http://localhost:3300/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    if (response.ok) {
      const data = await response.json()
      alert(data.success)
      setShowModal(false)
      setUsers([...users, data.user])
    }
  }
  return (
    <>
      <Header />
      <div id='main'>
        <Content>
          <h1>Quem Somos</h1>
          <Button as="button" variant="primary" onClick={() => setShowModal(true)}>Cadastrar usuário
          </Button>

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Cadastrar Usuário
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nome completo</Form.Label>
                  <Form.Control type="name" name="name" placeholder="Nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" name="pass" placeholder="senha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control type="url" name="photo" placeholder="Imagem" />
                </Form.Group>
                <Button variant="primary" type="submit">Cadastrar
                </Button>
              </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          {
            users.length > 0 ? users.map((user) => {
              return <CardUser key={user.id} user={user} users={users} setUsers={setUsers} />
            }) : null
          }

        </Content>
        <Sidebar />
      </div>
      <Footer />
    </>
  )
}

export default About