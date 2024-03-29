import Col from '../../components/colum'
import { useDispatch } from 'react-redux'
import { deleteOrder } from '../../store/actions/orderAction'
import moment from 'moment'

const OrderUser = ({ order, index }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteOrder(order.id))
  }

  return (
    <tr bgcolor={index % 2 === 0 ? '#ffffff' : '#f5f0f0'} className='table-raw'>
      <Col val={order.companyName} />
      <Col val={order.numberOfproduct} />
      <Col val={moment(order.createdAt).format('LL')} />
      <Col val={order.status ? 'Accepted' : 'Not Accepted'} />
      <td className='col'>
        <button className='delete-button' onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default OrderUser
