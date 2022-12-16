import { useState } from 'react'
import Col from '../../components/colum'
import { deleteAttachment } from '../../store/actions/attachmentAction'
import { useDispatch } from 'react-redux'
import { updateSimAcStatue } from '../../store/actions/addSimAction'
import URL from '../../store/serverUrl'
import moment from 'moment'

const NewSim = ({ attachment, index, length }) => {
  const dispatch = useDispatch()

  const [openModel, setOpen] = useState(false)

  const [modelData, setFormData] = useState({})

  const handleDelete = () => {
    let confirmed = window.confirm('Are you sure to delete it?')
    if (confirmed) {
      dispatch(deleteAttachment(attachment.id))
    }
  }

  const handleToggleModel = () => {
    setOpen(!openModel)
  }

  const handleAcitvate = () => {
    dispatch(updateSimAcStatue(attachment.sim.id, modelData))
    setOpen(!openModel)
  }

  const handleChange = e => {
    setFormData({ ...modelData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <tr
        bgcolor={index % 2 === 0 ? '#ffffff' : '#f5f0f0'}
        className='table-raw'
      >
        <Col val={`${length - index}`} />
        <Col val={attachment.sim.user.name} />

        <Col val={attachment.sim.operatorName} />

        <Col val={attachment.sim.simNumber} />

        <Col val={attachment.sim.ICCID} />
        <Col
          val={moment(attachment.sim.soldAt).format('MMMM Do YYYY, h:mm:ss a')}
        />

        <td className='col'>
          <button
            className={attachment.sim.approvalStatus ? '' : 'delete-button'}
            onClick={handleToggleModel}
          >
            {attachment.sim.approvalStatus ? 'Activated' : 'Activate'}
          </button>
        </td>

        <td className='col'>
          {' '}
          <button className='dawnload-button'>
            <a
              style={{ color: 'black' }}
              href={`${URL}/wordfile/${attachment.file_1}`}
              download
            >
              {' '}
              Word File{' '}
            </a>
          </button>
        </td>
        <td className='col'>
          {attachment.file_2 ? (
            <button className='dawnload-button'>
              {' '}
              <a
                style={{ color: 'black' }}
                rel='noreferrer'
                target='_blank'
                href={`${URL}/uploads/${attachment.file_2}`}
                download
              >
                {' '}
                File1
              </a>
            </button>
          ) : (
            ''
          )}
        </td>
        <td className='col'>
          {' '}
          {attachment.file_3 ? (
            <button className='dawnload-button'>
              {' '}
              <a
                style={{ color: 'black' }}
                rel='noreferrer'
                target='_blank'
                href={`${URL}/uploads/${attachment.file_3}`}
                download
              >
                {' '}
                File2
              </a>
            </button>
          ) : (
            ''
          )}
        </td>
        <td className='col'>
          {attachment.file_4 ? (
            <button className='dawnload-button'>
              {' '}
              <a
                style={{ color: 'black' }}
                rel='noreferrer'
                target='_blank'
                href={`${URL}/uploads/${attachment.file_4}`}
                download
              >
                {' '}
                File3
              </a>
            </button>
          ) : (
            ''
          )}
        </td>

        <Col val={attachment.sim.comment} />

        <td className='col'>
          <button className='delete-button' onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>

      <div className={openModel ? 'model-active' : 'model'}>
        <div className='model-sub'>
          <label className='mod-lab' name='comment' htmlFor='comment'>
            Add A Comment
          </label>
          <input
            onChange={handleChange}
            className='mod-inp'
            name='comment'
            type='text'
          />
          <button className='mod-btn' onClick={handleAcitvate}>
            Done
          </button>
          <button className='mod-btn-clr' onClick={handleToggleModel}>
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default NewSim
