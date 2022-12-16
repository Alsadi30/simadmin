import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/actions/getUsers'
import Reportrow from './row'
import ReactLoading from 'react-loading'

const Reports = () => {
  const dispatch = useDispatch()
  const { users, isLoding } = useSelector(state => state.usersReducer)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <table style={{ display: 'table' }} className='table-1'>
        <thead className='table__thead'>
          <tr>
            <th className='tb-head'> Name</th>
            <th className='tb-head'>Email</th>
            <th className='tb-head'>Created At</th>
            <th className='tb-head'>Show Detail</th>
            <th className='tb-head'>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {isLoding ? (
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
            users.map((used, index) => (
              <Reportrow key={used.id} used={used} index={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Reports
