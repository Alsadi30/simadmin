import axios from 'axios'
import Types from './type'
import setAuthToken from '../../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import URL from '../serverUrl'
import {  toast } from 'react-toastify';


export const login = (user, navigate) => (dispatch) => {    
    axios.post(`${URL}/api/imadmin/login`, user)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('auth_token', token)
            setAuthToken(token)
            const decode = jwtDecode(token)
            dispatch({
                type: Types.SET_ME,
                payload: {
                    user: decode
                }
            })
            
            navigate('/dashboard')
            toast.success("You Are Successfully LogedIn!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });
        })
        .catch(e => {
        
            dispatch({
               type:Types.ME_ERROR,
               payload:{
                   error:e.response.data.message
               }
           })
           toast.error(`${e.response.data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
          });
       })
}




export const logout = (navigate) => dispatch => {
    console.log('I am Call at logout')
    localStorage.removeItem('auth_token')
    
    dispatch({
            type:Types.SET_ME,
            payload:{
              user:{},
            }

      })
     
      navigate('/login')
    
 }






 export const signin = (user, navigate) => (dispatch) => {

    axios.post(`${URL}/api/imadmin/create`, user)
        .then(res => {
            toast.success("User Successfully Created!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            
            navigate('/login')
        })
        .catch(e => {
            if (e.response.data.name) {
                toast.error(`${e.response.data.name}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
            if (e.response.data.email) {
                toast.error(`${e.response.data.email}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
            if (e.response.data.password) {
                toast.error(`${e.response.data.password}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
            if (e.response.data.confirmPassword) {
                toast.error(`${e.response.data.confirmPassword}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
        })
}
