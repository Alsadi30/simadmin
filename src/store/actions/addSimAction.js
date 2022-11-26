import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'
import { toast } from 'react-toastify';


export const addSim = (simdata) => (dispatch) => {
  axios.post(`${URL}/api/sim/create`, simdata)
        .then(res => {
          toast.success("Sim Added Successfully !", {
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


export const getSims = (userid) => (dispatch) => {
  axios.get(`${URL}/api/sim/${userid}`)
    .then(res => {
      dispatch({
        type:Types.SET_SIMS,
        payload: {
          sims: res.data.sims
        }
      })
     
    })
    .catch(e => {
      dispatch({
        type:Types.SIMS_ERROR,
        payload: {
          error:e
        }
      })
      toast.error(`${e.message}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
      });
  })

}



export const updateSimAcStatue = (id, modelData) => (dispatch) => {
  axios.post(`${URL}/api/sim/update/${id}`, modelData)
    .then(res => {
        console.log(res.data)
          dispatch({
              type: Types.UPDATE_SIM_AC_STATUE,
              payload: { sim:res.data.updatedSim }
         })

         toast.success("Sim Status Updated Successfully !", {
          position: toast.POSITION.TOP_CENTER
        });
      
      })
      .catch(e => {
          console.log(e.message)
          dispatch({
              type:Types.SIMS_ERROR,
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
