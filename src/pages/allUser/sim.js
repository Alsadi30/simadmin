import Col from '../../components/colum'
import moment from 'moment'

const Sim = ({ sim, index }) => {
  return (
    <tr bgcolor={index % 2 === 0 ? '#ffffff' : '#f5f0f0'} className='table-raw'>
      <Col val={`${index + 1}`} />
      <Col val={sim.operatorName} />
      <Col val={sim.simNumber} />
      <Col val={sim.ICCID} />
      <Col val={sim.saleStatus ? 'Sold' : 'In Stock'} />
      <Col val={sim.approvalStatus ? 'Activated' : 'Not Activated'} />
      <Col val={moment(sim.orderedAt).format('LL')} />
      <Col val={moment(sim.createdAt).format('LL')} />
      <Col val={moment(sim.activatedAt).format('LL')} />
      <Col val={sim.cost} />
      <Col val={sim.comment} />
    </tr>
  )
}

export default Sim
