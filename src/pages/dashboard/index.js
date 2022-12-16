import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'
import { nonActiveUser } from '../../store/actions/getUsers'
import { useEffect, useState } from 'react'
import UserRow from './nonuserRow'
import NewSim from './newSim'
import { getAttachment } from '../../store/actions/attachmentAction'
import { getNonAcOrder } from '../../store/actions/orderAction'
import OrderRow from './orderN'
import jwtDecode from 'jwt-decode'
import { logout } from '../../store/actions/loginAction'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoding, nonuser } = useSelector(state => state.usersReducer)
  const { isLoadingg, attachments } = useSelector(
    state => state.attachmentReducer
  )
  const { isOLoading, nonAcOrder } = useSelector(state => state.orderReducer)

  const [pageNo, setPageNo] = useState(1)

  let norder = nonAcOrder.filter(order => order.status === false)
  let attachmentreversed = attachments.sort((a, b) => {
    return new Date(b.sim.soldAt) - new Date(a.sim.soldAt)
  })

  useEffect(() => {
    const token = localStorage.getItem('auth_token')

    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logout(navigate))
      }
    }

    dispatch(getNonAcOrder())
    dispatch(nonActiveUser())
    dispatch(getAttachment(pageNo))
  }, [dispatch, navigate, pageNo])

  return (
    <div className='dash'>
      {nonuser.length > 0 ? (
        <h3 className='dashboard-title'>Users are not activated yet</h3>
      ) : (
        ''
      )}
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
        nonuser.map((use, index) => {
          return <UserRow key={use.id} user={use} index={index} />
        })
      )}

      <h3 className='dashboard-title'>
        Sims which have just sold but not activated yet
      </h3>

      {isLoadingg ? (
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
        <table className='table'>
          <thead className='table__thead'>
            <tr>
              <th className='tb-head'> Sl </th>
              <th className='tb-head'>Shop Name</th>
              <th className='tb-head'>Operator Name</th>
              <th className='tb-head'>Sim Number</th>
              <th className='tb-head'>ICCID</th>
              <th className='tb-head'>Sales Time</th>
              <th className='tb-head'>Actions</th>
              <th className='tb-head'>Word File</th>
              <th className='tb-head'>File 1</th>
              <th className='tb-head'>File 2</th>
              <th className='tb-head'>File 3</th>
              <th className='tb-head'>Comment</th>
              <th className='tb-head'>Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {attachmentreversed.map((attachment, i) => {
              return (
                <NewSim
                  key={attachment.id}
                  attachment={attachment}
                  index={i}
                  length={attachmentreversed.length}
                />
              )
            })}
          </tbody>
        </table>
      )}
      <div className='pagination'>
        <button
          className='pagination-button'
          disabled={pageNo < 2 ? true : false}
          onClick={() => setPageNo(pageNo - 1)}
        >
          {' '}
          {'<'}{' '}
        </button>
        <span className='pagination-num'>{pageNo} </span>
        <button
          className='pagination-button'
          onClick={() => setPageNo(pageNo + 1)}
        >
          {' '}
          {'>'}
        </button>
      </div>
      {norder.length > 0 ? (
        <h3 className='dashboard-title'>Orders Not Approved Yet</h3>
      ) : (
        ''
      )}

      {isOLoading ? (
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
        norder.length > 0 && (
          <table style={{ display: 'table' }} className='table-1'>
            <thead className='table__thead'>
              <tr>
                <th className='tb-head'>Shop Name </th>
                <th className='tb-head'>Operator Name</th>
                <th className='tb-head'>Quantity</th>
                <th className='tb-head'>Ordered At</th>
                <th className='tb-head'> Action</th>
                <th className='tb-head'>Delete </th>
              </tr>
            </thead>
            <tbody>
              {norder.map((order, index) => {
                return <OrderRow key={order.id} order={order} index={index} />
              })}
            </tbody>
          </table>
        )
      )}
    </div>
  )
}

export default Dashboard
