import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'
import { toast } from 'react-toastify'

export const getNonAcOrder = () => dispatch => {
  axios
    .get(`${URL}/api/order/nonac`)
    .then(res => {
      dispatch({
        type: Types.SET_NONACORDER,
        payload: {
          orders: res.data.orders
        }
      })
    })
    .catch(e => {
      dispatch({
        type: Types.ORDERS_ERROR,
        payload: {
          error: e.message
        }
      })
      toast.error(`${e.message}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })
    })
}

export const ordersById = userid => dispatch => {
  axios
    .get(`${URL}/api/order/${userid}`)
    .then(res => {
      dispatch({
        type: Types.SET_ORDER,
        payload: {
          orders: res.data.orders
        }
      })
    })
    .catch(e => {
      dispatch({
        type: Types.ORDERS_ERROR,
        payload: {
          error: e.message
        }
      })
      toast.error(`${e.message}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })
    })
}

export const updateOrderAcStatue = id => dispatch => {
  axios
    .post(`${URL}/api/order/update/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: Types.UPDATE_ORDER_AC_STATUS,
        payload: { order: id }
      })

      toast.success('Order Status Updated Successfully !', {
        position: toast.POSITION.TOP_CENTER
      })
    })
    .catch(e => {
      dispatch({
        type: Types.ORDERS_ERROR,
        payload: {
          error: e.message
        }
      })
      toast.error(`${e.message}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })
    })
}

export const deleteOrder = id => dispatch => {
  axios
    .delete(`${URL}/api/order/delete/${id}`)
    .then(res => {
      toast.success('Order Deleted Successfully !', {
        position: toast.POSITION.TOP_CENTER
      })
    })
    .catch(e => {
      dispatch({
        type: Types.ORDERS_ERROR,
        payload: {
          error: e.message
        }
      })
      toast.error(`${e.message}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })
    })
}
