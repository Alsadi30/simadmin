import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOffer, getOffers } from '../../store/actions/addOffer'
import ReactLoading from 'react-loading'
import OfferRow from './offerRow'

const AddOffer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOffers())
  }, [dispatch])

  const { offers, isLoading } = useSelector(state => state.offerReducer)

  let [formData, setFormData] = useState({})

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addOffer(formData))
    e.target.reset()
  }

  return (
    <div class='dash'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label class='form-control' htmlFor='title'>
            Title
          </label>
          <input
            type='text-aria'
            required
            className='form-control shadow'
            name='title'
            id='ICCID'
            aria-describedby='title'
            placeholder='Enter Offer Title '
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label class='form-control' htmlFor='operatorName'>
            Operator Name
          </label>
          <input
            type='text'
            required
            className='form-control shadow'
            name='operatorName'
            id='operatorName'
            aria-describedby=''
            placeholder='Enter Operator Name '
            onChange={handleChange}
          />
        </div>

        <button className='submit-button'>Submit</button>
      </form>

      <div>
        <h3 className='dashboard-title'>Running Offers</h3>
        <table style={{ display: 'table' }} className='table'>
          <thead className='table__thead'>
            <tr>
              <th className='tb-head'> Title</th>
              <th className='tb-head'>Operator Name</th>
              <th className='tb-head'>Created At</th>
              <th className='tb-head'>Delete Offer</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div className='loading'>
                <ReactLoading
                  className='loading'
                  type='bubbles'
                  color='#2C3E50'
                  height={60}
                  width={60}
                />
              </div>
            ) : (
              offers.map((offer, index) => {
                return <OfferRow key={offer.id} offer={offer} index={index} />
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AddOffer
