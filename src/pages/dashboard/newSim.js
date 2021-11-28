import Col from "../../components/colum"
import { deleteAttachment } from "../../store/actions/attachmentAction"
import { useDispatch } from "react-redux"
import { updateSimAcStatue } from "../../store/actions/addSimAction"
import URL from '../../store/serverUrl'

 
const NewSim = ({ attachment }) => {

   const dispatch = useDispatch()

   const handleDelete = () => {
        dispatch(deleteAttachment(attachment.id))
  }
  
  const handleAcitvate = () => {
    dispatch(updateSimAcStatue(attachment.sim.id))
  }
    
    return (
        <>
            
             
                    <tr bgcolor="#fff1f1" className='table-raw'>

                    <Col val={attachment.sim.user.name} />
            
                    <Col val={attachment.sim.operatorName} />
                        
                    <Col val={attachment.sim.simNumber} />
                        
                    <Col val={attachment.sim.ICCID} />
            
            <td className='col'><button className={attachment.sim.approvalStatus?'':'delete-button'} onClick={handleAcitvate}>{attachment.sim.approvalStatus?'Activated':'Activate'}</button></td>
                        

           <td className='col'>  <button className='dawnload-button'>
                <a href={`${URL}/wordfile/${attachment.file_1}`} download > Word File </a>
            </button>
            </td>
            <td className='col'>
                        {
                attachment.file_2 ? <button className='dawnload-button'> <a rel="noreferrer" target="_blank" href={`${URL}/uploads/${attachment.file_2}`} download >  File1</a></button>:''
              }  
              </td>
             <td className='col'> {
                attachment.file_3 ? <button className='dawnload-button'> <a rel="noreferrer" target="_blank" href={`${URL}/uploads/${attachment.file_3}`} download >  File2</a></button>:''
                        }
                        </td>
                        <td className='col'>
            {
                attachment.file_4 ? <button className='dawnload-button'> <a rel="noreferrer" target="_blank" href={`${URL}/uploads/${attachment.file_4}`} download > File3</a></button>:''
              }  
                        </td>
                        <td className='col'>
            {
                attachment.file_5 ? <button className='dawnload-button'> <a rel="noreferrer" target="_blank" href={`${URL}/uploads/${attachment.file_5}`} download > File4</a></button>:''
              }  
              </td>
           
              <td className='col'><button className='delete-button' onClick={handleDelete}>Delete</button></td>
            </tr>
         
               
     </>
    )
}

export default NewSim 