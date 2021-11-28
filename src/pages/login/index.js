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
    
    const {error} = useSelector(state=>state.loginReducer)

    const [formData,setFormData] = useState(initialState)

    
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value })
}    
    
    const handleSubmit = (e) => {
     e.preventDefault()
     dispatch(login(formData,navigate))
}    
    
    return (
        <div className='logbody'>
            <form className='logform __shadow--lg' onSubmit={ handleSubmit }>
            <h3  className="log-head" > Phone Care (Sim Service)</h3>
                <div className="form-group ">
                  <label  className="form-control forhed"htmlFor="name">Name</label>
                    <input type="text" 
                        className="form-control log" name="name" id="name" aria-describedby="helpId" placeholder="Enter Admin Name" onChange={handleChange}/>
                    {error.error && <small id="helpId" className="log-error">{error.error}</small>}
                </div>
                <div className="form-group">
                  <label  className="form-control" htmlFor="Password">Password</label>
                  <input type="password"
                    className="form-control" name="password" id="password" aria-describedby="passId" placeholder="Enter Admin Password" onChange={handleChange}/>
                    { error.error?  <small id="passId" className="log-error">{error.error}</small> :''}
                </div>
                <button className='log-button'>
                    Submit
                </button>
            </form>
            
        </div>
    )
}

export default Login
