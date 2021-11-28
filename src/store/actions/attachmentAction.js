import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'
import {  toast } from 'react-toastify';


export const getAttachment = () => (dispatch) => {

    axios.get(`${URL}/api/attachment`)
        .then(res => {
            dispatch({
                type: Types.SET_ATTACHMENTS,
                payload: {
                    attachments: res.data
                }
            })
        })
        .catch(e => {
            console.log(e)
            dispatch({
                type:Types.ATTACHMENTS_ERROR,
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









export const deleteAttachment = (id) => (dispatch) => {
    axios.delete(`${URL}/api/attachment/${id}`)
        .then(res => {
            dispatch({
                type: Types.DELETE_ATTACHMENTS,
                payload: { id:id }
            })
            toast.success("Attachment Deleted Successfully !", {
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