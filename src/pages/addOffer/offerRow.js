
import Col from '../../components/colum'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deleteOffer} from '../../store/actions/addOffer'


const OfferRow = ({ offer }) => {
  

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteOffer(offer.id))
    }

  
    return (
        
       
                <tr bgcolor="#fff1f1" className='table-raw'>
                    
                    <Col val={offer.title} />
                    
                    <Col val={offer.operatorName} />
                    
                <Col val={moment(offer.createdAt).format('LL')} />
              
               

                <td className='col'><button className="delete-button" onClick={handleDelete}>Delete</button></td>
                    </tr>
       
       
    )
}

export default OfferRow

