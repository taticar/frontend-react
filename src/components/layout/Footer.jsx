import "./Footer.css"
import useUserStore from '../../store/userStore.js'
 
const Footer = () => {

  const nameUser = useUserStore((state) => state.name)

  return (
    <footer>
        <span>Tatiana Carvalho @ 2023 - Logado como: {nameUser}</span>
    </footer>
  )
}

export default Footer;