import axios from 'axios'
import Types from './type'
import setAuthToken from '../../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import URL from '../serverUrl'



export const login = (user, navigate) => (dispatch) => {
    console.log(user)
    axios.post(`http://localhost:5000/api/imadmin/login`, user)
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
        })
        .catch(e => {
           console.log("error1 "+ e)
           dispatch({
               type:Types.ME_ERROR,
               payload:{
                   error:e.response
               }
           })
       })
}