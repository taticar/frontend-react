import './CardUser.css'
import { BsTrash as IconTrash } from 'react-icons/bs'
import { AiOutlineEdit as IconEdit} from 'react-icons/ai'

// as para renomear elemento

const CardUser = ({user}) => {
    return (
        <div className="card-user">
            <img src={user.photo} alt={user.name}/>
            <div>
                <h3>{user.name}</h3>
                <span>{user.email}</span>
                <IconEdit className='icon-edit'/>
                <IconTrash className='icon-trash'/>
            </div>
            </div>
    )
}

export default CardUser;