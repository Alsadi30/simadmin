import Header from "../../components/header"
import Navbar from "../../components/navbar"
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from "../../store/actions/getUsers"
import { useState, useEffect } from "react"
import jwtDecode from "jwt-decode"
import UserRow from "./userRow"
import NewSim from './newSim'
import { getAttachment } from '../../store/actions/simAction'


const Dashboard = () => {

    const [user,setUser] = useState([])
    const dispatch = useDispatch()
    const { isLoding, users, error } = useSelector(state => state.usersReducer)
    const {isLoadingg,attachments,errors} = useSelector(state=> state.simsReducer)
    useEffect(() => {
   
    //     const token = localStorage.getItem('auth_token')
        
    //     if (token) {
    //       const decodedToken = jwtDecode(token);   
    //       if (decodedToken.exp * 1000 < new Date().getTime()) {
    //         //   dispatch(logout(history))
    //       }
    //     }
        dispatch(getUsers())
        dispatch(getAttachment())
    setUser(users)  
      },[user] );




    

 

    
  
    
    console.log(error)
    console.log(users)
    return (
        !isLoding &&
        <div>
            <Header />
          
           <div className="cont">
                <div className="navbar">
                    <Navbar />
                </div>
                    <div className="dash">
                        <h2>Users are not activated yet</h2>
                        {users.users.map(user =>
                        {
                            return (user.isActive ? null:
                         
                                <UserRow user={user} />
                            )
                        })}
                        
                        <h2>Sim which are just sold but not activated</h2>
                        { !isLoadingg && attachments.map(attachment =>
                        {
                            return (
                         
                                <NewSim attachment={attachment} />
                            )
                        })}
                    </div>
              </div>
            
           
        </div>
    )
}


export default Dashboard