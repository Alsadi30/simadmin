import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSim } from '../../store/actions/addSimAction'
import { getUsers } from '../../store/actions/getUsers'
import { toast } from 'react-toastify'

const AddSim = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})

  const { users } = useSelector(state => state.usersReducer)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formData.ICCID.length === 19) {
      console.log(formData.ICCID.length === 19)
      dispatch(addSim(formData))
      e.target.reset()
    } else {
      toast.warn('Please Maintain 19 digits in ICCID !', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  return (
    <div class='dash'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label class='form-control' htmlFor='username'>
            Shop Name
          </label>

          <select
            name='username'
            class='form-control shadow'
            aria-label='username'
            required
            onChange={handleChange}
          >
            <option value=''>Select Shop</option>
            {users &&
              users.map(user => <option value={user.name}>{user.name}</option>)}
          </select>
        </div>

        <div className='form-group'>
          <label class='form-control' htmlFor='Operator'>
            Operator
          </label>{' '}
          <select
            name='Operator'
            class='form-control shadow'
            aria-label='Operator'
            required
            onChange={handleChange}
          >
            <option value=''>Select Operator</option>
            <option value='Wind'>Wind</option>
            <option value='Vodafone'>Vodafone</option>
            <option value='Very'>Very</option>
            <option value='Kena'>Kena</option>
          </select>
        </div>

        <div className='form-group'>
          <label class='form-control' htmlFor='ICCID'>
            ICCID
          </label>
          <input
            type='number'
            required
            className='form-control shadow'
            name='ICCID'
            id='ICCID'
            aria-describedby='ICCID'
            placeholder='Enter ICCID '
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label class='form-control' htmlFor='simNumber'>
            Sim Number
          </label>
          <input
            type='number'
            required
            className='form-control shadow'
            name='simNumber'
            id='simNumber'
            aria-describedby=''
            placeholder='Enter Sim Number '
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label class='form-control' htmlFor='cost'>
            Cost
          </label>
          <input
            type='number'
            required
            className='form-control shadow'
            name='cost'
            id='cost'
            aria-describedby='cost'
            placeholder='Enter Cost '
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label class='form-control' htmlFor='orderedAt'>
            Ordered At
          </label>
          <input
            type='date'
            required
            className='form-control shadow'
            name='orderedAt'
            id='orderedAt'
            aria-describedby='orderedAt'
            onChange={handleChange}
          />
        </div>
        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )
}

export default AddSim
