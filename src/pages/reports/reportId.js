import { useState } from 'react'
import { useSelector } from 'react-redux'
import Sim from '../allUser/sim'
import ReactLoading from 'react-loading';



const IdReport = () => {

    const [from, setFrom] = useState({
        from: Date.now(),
        to: Date.now(),
        product:'all'
    })
    

    const handleChange = (e) => {
        setFrom({ ...from, [e.target.name]: e.target.value })
    } 

    const {sims,isLoading} = useSelector(state => state.simReducer)

  

    let filtered = sims.filter(
        sim => 
            
            sim.approvalStatus === true &&
            (sim.activatedAt ) >= from.from && (sim.activatedAt ) <= from.to && (from.product === 'all'?  sim.approvalStatus === true : from.product === sim.operatorName)
        
            
      )

 
    return (
            <div className='dash'>
                <h3 className='dashboard-title'>
                    Sales OverView
                </h3>
                <div className='re-grp'>
                <div className='re-grp'>
                <label className='re-lab' htmlFor='product' > Product</label>
                    <select name='product' id='product' className='re-inp' onChange={handleChange}  >
                    <option value='all'>All</option>
                        <option value='Vodafone'>Vodafone</option>
                        <option value='Wind'>Wind</option>
                        <option value='Very'>Very</option>
                        <option value="Kena">Kena</option>
                    </select>
                </div>
                <div className='re-grp'>
                    <label className='re-lab' htmlFor='from' > Start</label>
                    <input onChange={handleChange} className='re-inp' type='date' name='from' />
                    </div>
                    <div className='re-grp'>
                    <label className='re-lab' htmlFor='to' > To</label>
                    <input onChange={handleChange}   className='re-inp' type='date' name='to' />
                    </div>
                    </div>
           
    
    
            <table className='table-1'>
            <thead className='table__thead'>
                <tr>
                    <th className="tb-head"> Sl</th>
<th className='tb-head'>Operator Name</th>
                    <th className='tb-head'>Sim Number</th>
                    <th className='tb-head'>ICCID</th>
                        <th className='tb-head'>Sales Status</th>
                        <th className='tb-head'>Active Status</th>
                        <th className='tb-head'>Ordered At</th>
                        <th className='tb-head'>Approved At</th>
                        <th className='tb-head'>Activated At</th>
                        <th className='tb-head'>Cost </th>
                        <th className='tb-head'>Comment</th>
                 </tr>
                </thead>
                
            <tbody>
                    { isLoading ? <div className ='loading' > < ReactLoading className = 'loading' type = 'bubbles' color = '#2C3E50' height = { 60} width = { 60} /> </div > :   filtered.map((sim,i) =>
                    {

                                return (                          
                                    <Sim key={sim.id} sim={sim} index={i} />
                                )
                            })}
         </tbody>
                </table>
                
              
            </div>
    )
}

export default IdReport
