import Col from '../../components/colum'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../store/actions/getUsers'
import {Link } from 'react-router-dom'
import { getSims } from '../../store/actions/addSimAction'

const Row = ({ used }) => {
  

    const dispatch = useDispatch()

    const handleDelete = () => {
         let confirmed = window.confirm("Are you sure to delete it?")
         if(confirmed){
        dispatch(deleteUser(used.id))
    }
}

    const handleDetails = () => {
        dispatch(getSims(used.id))
    }

    return (    
                <tr bgcolor="#fff1f1" className='table-raw'>
                    
                    <Col val={used.name} />
                    
                    <Col val={used.email} />
                    
                <Col val={moment(used.createdAt).format('LL')} />
                <td className='col'>
                <Link to={`/alluser/${used.id}`}> 
                    <button className='btn' onClick={handleDetails}>
                    Details
                    </button> </Link></td>

                <td className='col'><button className="delete-button" onClick={handleDelete}>Delete</button></td>
                    </tr>
          
       
    )
}

export default Row
