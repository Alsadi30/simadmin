import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'



export const getUsers = () => (dispatch) => {

    axios.get(`http://localhost:5000/api/user`)
        .then(res => {
            dispatch({
                type: Types.SET_USERS,
                payload: {
                    users: res.data
                }
            })
        })
        .catch(e => {
            console.log(e.response)
            dispatch({
                type:Types.USERS_ERROR,
                payload:{
                    error:e.response
                }
            })        
       })
}

export const updateUser = (id) => (dispatch) => {
  
    console.log(id)
    axios.put(`http://localhost:5000/api/user/${id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: Types.SET_ME,
                payload: {
                    users: res.data
                }
            })
        })
        .catch(e => {
            dispatch({
                type:Types.ME_ERROR,
                payload:{
                    error:e.response
                }
            })
    })
}