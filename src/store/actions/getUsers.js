import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'
import {  toast } from 'react-toastify';


export const nonActiveUser = () => (dispatch) => {
    axios.get(`${URL}/api/user/nonActive`)
        .then(res => {
            dispatch({
                type: Types.SET_NONUSER,
                payload: {
                    user: res.data.users
                }
            })
        })
        .catch(e => {
            dispatch({
                type:Types.NONUSER_ERROR,
                payload:{
                    error:e.response
                }
            })
            toast.error(`${e.message}`, {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });
       })
}



export const getUsers = () => (dispatch) => {

    axios.get(`${URL}/api/user`)
        .then(res => {
          
            dispatch({
                type: Types.SET_USERS,
                payload: {
                    users: res.data.users
                }
            })
        })
        .catch(e => {
            dispatch({
                type:Types.USERS_ERROR,
                payload:{
                    error:e.message
                }
            })
            toast.error(`${e.message}`, {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });
       })
}

export const updateUser = (id) => (dispatch) => {
  
    axios.put(`${URL}/api/user/${id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: Types.SET_ME,
                payload: {
                    users: res.data
                }
            })
            toast.success("User Activated Successfully !", {
                position: toast.POSITION.TOP_CENTER
              });
        })
        .catch(e => {
            dispatch({
                type:Types.ME_ERROR,
                payload:{
                    error:e.message
                }
            })
            toast.error(`${e.message}`, {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });
    })
}


export const deleteUser = (id) => (dispatch) => {
    axios.delete(`${URL}/api/user/${id}`)
        .then(res => {
            toast.success("User Deleted Successfully !", {
                position: toast.POSITION.TOP_CENTER
              });
        })
        .catch(e => {
            toast.error(`${e.message}`, {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });
    })


}