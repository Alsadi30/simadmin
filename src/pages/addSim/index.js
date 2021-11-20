import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import { addSim } from '../../store/actions/addSimAction'



// const initialState = {
//     name: '',
//     password:''
// }


const AddSim = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    
    // const error = useSelector((state)=>state.loginreducer.error)

    const [formData,setFormData] = useState({})

    
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value })
}    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addSim(formData))
 
}    
    
    return (
        <div>
             <Header />
            <div class="container">
           <div class="row">
           <div class="col-sm-2"><Navbar /></div>
           <div class="col-sm-9">
                    <form onSubmit={handleSubmit}>
                     <div className="form-group">
                         <label htmlFor="username">Shop Name</label>
                         <input type="text" required
                          className="form-control" name="username" id="username" aria-describedby="ICCIC" placeholder="Enter username " onChange={handleChange}/>
                         <small id="username" className="form-text text-muted">Help text</small>
                     </div>

                  <div className="form-group">
  <label  htmlFor="Operator">Operator</label>
  <select name='Operator' class="form-select" aria-label="Operator" required onChange={handleChange}>
 <option value=''>Select Operator</option>
     <option value="Wind">Wind</option>
 <option value="Vodafone">Vodafone</option>
 <option value="Very">Very</option>
</select>
  <small id="helpId" className="form-text text-muted">Help text</small>
                            </div>
                            
<div className="form-group">
  <label htmlFor="ICCID">ICCID</label>
  <input type="number" required
    className="form-control" name="ICCID" id="ICCID" aria-describedby="ICCIC" placeholder="Enter ICCID " onChange={handleChange}/>
  <small id="ICCID" className="form-text text-muted">Help text</small>
                            </div>
                            
                            <div className="form-group">
  <label htmlFor="simNumber">Sim Number</label>
  <input type="number" required
    className="form-control" name="simNumber" id="simNumber" aria-describedby="" placeholder="Enter Sim Number " onChange={handleChange}/>
  <small id="simNumber" className="form-text text-muted">Help text</small>
                            </div>
                            
                            <div className="form-group">
  <label htmlFor="cost">Cost</label>
  <input type="number" required
    className="form-control" name="cost" id="cost" aria-describedby="cost" placeholder="Enter Cost " onChange={handleChange}/>
  <small id="cost" className="form-text text-muted">Help text</small>
                            </div>
                            
                            <div className="form-group">
  <label htmlFor="orderedAt">Ordered At</label>
  <input type="date" required
    className="form-control" name="orderedAt" id="orderedAt" aria-describedby="orderedAt"   onChange={handleChange}/>
  <small id="orderedAt" className="form-text text-muted">Help text</small>
</div>
<button>
    Submit
</button>
</form></div>
                </div>
                </div>
           
            
        </div>
    )
}

export default AddSim
