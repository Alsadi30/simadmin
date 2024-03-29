import Col from '../../components/colum'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deleteOffer } from '../../store/actions/addOffer'

const OfferRow = ({ offer, index }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    let confirmed = window.confirm('Are you sure to delete it?')
    if (confirmed) {
      dispatch(deleteOffer(offer.id))
    }
  }

  return (
    <tr bgcolor={index % 2 === 0 ? '#ffffff' : '#f5f0f0'} className='table-raw'>
      <Col val={offer.title} />

      <Col val={offer.operatorName} />

      <Col val={moment(offer.createdAt).format('LL')} />

      <td className='col'>
        <button className='delete-button' onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default OfferRow
