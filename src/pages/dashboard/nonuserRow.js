import Col from "../../components/colum"
import {useDispatch} from 'react-redux'
import {updateUser,deleteUser} from '../../store/actions/getUsers'

const UserRow = ({ user}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(updateUser(user.id))
    }

    const handleDelete = () => {
        dispatch(deleteUser(user.id))
    }

    return (
       
            <table style={{display:'table'}} className='table-1'>
                <tbody>
                    <tr bgcolor="#fff1f1" className='table-raw'>
                        <Col val={user.name} />
                        <Col val={user.email} />
                       <td className='col'><button className='active-button' onClick={handleClick}>
                Activate It
           </button></td> 
           <td className='col'><button className='delete-button' onClick={handleDelete}>
               Delete It
           </button></td> 
                    </tr>
            </tbody>
            </table>   
    ) 
}

export default UserRow