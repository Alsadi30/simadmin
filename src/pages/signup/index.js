import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { signin } from '../../store/actions/loginAction'


const initialState = {
    name: '',
    email:'',
    password: '',
    confirmPassword:''
}


const Signup = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    

    const [formData,setFormData] = useState(initialState)

    
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value })
}    
    
    const handleSubmit = (e) => {
     e.preventDefault()
     dispatch(signin(formData,navigate))
}    
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>

                <div className="form-group">
                  <label htmlFor="name">aName</label>
                    <input type="text" 
                        className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Enter Your Name" onChange={handleChange}/>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                    <input type="email" 
                        className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="Enter Your Email" onChange={handleChange}/>
                 
                </div>

                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input type="password"
                    className="form-control" name="password" id="password" aria-describedby="passId" placeholder="Enter Password" onChange={handleChange}/>
                
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password"
                    className="form-control" name="confirmPassword" id="confirmPassword" aria-describedby="confirmPassId" placeholder="Enter Confirm Password" onChange={handleChange}/>
                 
                </div>
                <button>
                    Submit
                </button>
            </form>
            
        </div>
    )
}

export default Signup
