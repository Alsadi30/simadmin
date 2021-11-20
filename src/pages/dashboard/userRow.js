import Col from "../../components/colum"
import {useDispatch} from 'react-redux'
import {updateUser} from '../../store/actions/getUsers'

const UserRow = ({ user}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(updateUser(user.id))
    }

    return (
        <div class="">

        <Col val={user.name} />
            <Col val={user.email} />
            <button onClick={handleClick}>
                Activate it
           </button>
        </div>
    )
    
}

export default UserRow