import Col from "../../components/colum"
import {useDispatch} from 'react-redux'
import {updateOrderAcStatue,deleteOrder} from '../../store/actions/orderAction'
import moment from 'moment'

const OrderRow = ({ order }) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(updateOrderAcStatue(order.id))
    }

    const handleDelete = () => {
        dispatch(deleteOrder(order.id))
    }

  

    return (
           <tr bgcolor="#fff1f1" className='table-raw'>
                        <Col val={order.user.name} />
            <Col val={order.companyName} />
            <Col val={order.numberOfproduct} />
            <Col val={moment(order.createdAt).format('LL')} />
            <td className='col'><button className='active-button'  onClick={handleClick}>
                     Activate It
            </button></td> 
                <td className='col'><button className='delete-button' onClick={handleDelete}>
                   Delete It
             </button></td>
            
        </tr>
           
    ) 
}

export default OrderRow