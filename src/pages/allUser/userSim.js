import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Sim from './sim'
import OrderUser from './OrderUser'
import { ordersById } from '../../store/actions/orderAction'
import ReactLoading from 'react-loading';

const UserSim = () => {
    
    const dispatch = useDispatch()
    const params = useParams()
    

    const { sims,  isLoading } = useSelector(state => state.simReducer)
    const {orders, isOLoading} = useSelector(state=> state.orderReducer)

    useEffect(() => {
        dispatch(ordersById(params.id))
   },[dispatch,params.id])



    return (
     
            <div className="dash">
                <h3 className='dashboard-title'>Users All Sim</h3>
             <table className='table-1'>
                <thead className='table__thead'>
            <tr>
                <th className='tb-head'>Operator Name</th>
                <th className='tb-head'>Sim Number</th>
                <th className='tb-head'>ICCID</th>
                    <th className='tb-head'>Sales Status</th>
                    <th className='tb-head'>Active Status</th>
                    <th className='tb-head'>Ordered At</th>
                    <th className='tb-head'>Approved At</th>
                    <th className='tb-head'>Activated At</th>
                    <th className='tb-head'>Cost </th>
             </tr>
                    </thead>
                    <tbody>
                { isLoading ? <div className ='loading' > < ReactLoading className = 'loading' type = 'bubbles' color = '#2C3E50' height = { 60} width = { 60} /> </div > : sims.slice(0).reverse().map(sim =>
                        {
                            return (
                         
                                <Sim key={sim.id} sim={sim} />
                            )
                        })}
           </tbody>
                </table>

                <h3 className='dashboard-title'> Users All Order</h3>

                <table style={{display:'table'}} className='table-1'>
                 <thead className='table__thead'>
				<tr>
					<th className='tb-head'>Operator Name</th>
					<th className='tb-head'>Quantity</th>
                            <th className='tb-head'>Ordered At</th>

                            <th className='tb-head'>Status</th>    
                    <th className='tb-head'>Delete </th>
				</tr>
                    </thead>
                    <tbody>
                    { isOLoading ? <div className ='loading' > < ReactLoading className = 'loading' type = 'bubbles' color = '#2C3E50' height = { 60} width = { 60} /> </div > : orders.map(order => {
                           return <OrderUser key={order.id} order={order}/>
                        })}
                    </tbody>
      </table>
              </div>
    )
}


export default UserSim