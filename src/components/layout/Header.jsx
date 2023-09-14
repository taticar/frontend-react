import './Header.css'
import {NavLink} from 'react-router-dom'
import Button from '../ui/Button'

const Header = () => {
    return (
        <header>
            <h1>Hot Cocoa & Snow</h1>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/produtos'>Produtos</NavLink></li>
                    <li><NavLink to='/quem-somos'>Quem somos</NavLink></li>
                    <li><NavLink to='/contato'>Contato</NavLink></li>
                    <li><Button variant='primary'>Login</Button></li>
                    <li><Button >Cadastre-se</Button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header