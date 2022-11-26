import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.png'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { logout } from '../../store/actions/loginAction'

const Header = () => {

      const [visible,setVisible] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
  


    const handleClick = () => {
        dispatch(logout(navigate))

    }  
 

    return (
        <div className="nav __shadow--lg">
        <div className='twin'>
            <img className='imgi' src={logo} alt="logo" width='30px' height='30px' />
            <div className='brand_name'>
                Phone Care ( Sim Service )
            </div>
            </div>
            <div className='twin'>
                 <div onClick={()=>setVisible(!visible)}>
                <img className='imgi' src={avatar} alt='avatar' width='35px' height="35px" />
             </div>
             <div className='user_name'>Admin</div>
               
                
               <button style={{display:visible?'':'none'}} className='modal' onClick={handleClick}><small> Logout</small></button>
            </div>
            
            </div>
    )

}


export default Header
