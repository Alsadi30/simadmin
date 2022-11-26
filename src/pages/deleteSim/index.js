import URL from "../../store/serverUrl"
import axios from 'axios'
import { toast } from 'react-toastify';
import {useState} from 'react'


const DeleteSim = () => {

const[formData,setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({[e.target.name]: e.target.value })
    }


    const submit = async () => {

       await axios.delete(`${URL}/api/sim/delete/${formData.iccid}`)
        .then(res => {
             toast.success("Sim Deleted Successfully !", {
              position: toast.POSITION.TOP_CENTER
            });
          
          })
          .catch(e => {
              console.log(e.message)
              toast.error(`${e.message}`, {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              })
         })
    
}

    return (
        <div className='re-grp'>
          <label className='re-lab' htmlFor='iccid' > Start</label>
            <input onChange={handleChange} className='re-inp' type='number' name='iccid' />
            <button onClick={submit} className='submit-button' > Delete</button>
        </div>
    )
}

export default DeleteSim
