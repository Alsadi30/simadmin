import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'



export const addSim = (simdata) => (dispatch) => {
    axios.post(`http://localhost:5000/api/sim/create`, simdata)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
           console.log("error1 "+ e)
          
       })
}