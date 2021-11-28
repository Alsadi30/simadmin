import Col from '../../components/colum'
import moment from 'moment'

const Sim = ({sim}) => {
    return (
        
        <tr bgcolor="#fff1f1" className='table-raw'>
            <Col val={sim.operatorName} />
                <Col val={sim.simNumber} />
                <Col val={sim.ICCID} />
                <Col val={sim.saleStatus?'Sold':'In Stock'} />
                <Col val={sim.approvalStatus?'Activated':'Not Activated'} />
                <Col val={moment(sim.orderedAt).format('LL')} />
                <Col val={moment(sim.createdAt).format('LL')} />
                <Col val={moment(sim.activatedAt).format('LL')} />
                <Col val={sim.cost} />
        </tr>

    )
}


export default Sim 