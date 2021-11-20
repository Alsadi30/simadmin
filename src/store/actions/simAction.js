import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'



export const getAttachment = () => (dispatch) => {

    axios.get(`http://localhost:5000/api/attachment`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: Types.SET_ATTACHMENTS,
                payload: {
                    attachments: res.data
                }
            })
        })
        .catch(e => {
            console.log(e.response)
            dispatch({
                type:Types.ATTACHMENTS_ERROR,
                payload:{
                    error:e.response
                }
            })        
       })
}

