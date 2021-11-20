import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../store/actions/loginAction'


const initialState = {
    name: '',
    password:''
}


const Login = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    
    // const error = useSelector((state)=>state.loginreducer.error)

    const [formData,setFormData] = useState(initialState)

    
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value })
}    
    
    const handleSubmit = (e) => {
     e.preventDefault()
     dispatch(login(formData,navigate))
}    
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                    <input type="text" 
                        className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Enter Admin Name" onChange={handleChange}/>
                  <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input type="password"
                    className="form-control" name="password" id="password" aria-describedby="passId" placeholder="Enter Admin Password" onChange={handleChange}/>
                  <small id="passId" className="form-text text-muted">Help text</small>
                </div>
                <button>
                    Submit
                </button>
            </form>
            
        </div>
    )
}

export default Login
