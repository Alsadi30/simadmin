import axios from 'axios'
import Types from './type'
import { toast } from 'react-toastify';
import URL from '../serverUrl'

export const addOffer = (offerData) => (dispatch) => {
    axios.post(`${URL}/api/offers/create`, offerData)
        .then(res => {
          toast.success(" Offer Added Successfully !", {
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




export const getOffers = () => (dispatch) => {
  axios.get(`${URL}/api/offers`)
    .then(res => {
      dispatch({
        type:Types.GET_OFFERS,
        payload: {
          offers:res.data.offers
        }
      })
     
    })
    .catch(e => {
      dispatch({
        type:Types.OFFERS_ERROR,
        payload: {
          error:e.message
        }
      })
      toast.error(`${e.message}`, {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
      });
  })

}



export const deleteOffer  = (id) => (dispatch) => {
  axios.delete(`${URL}/api/offers/delete/${id}`)
    .then(res => {
         toast.success("Order Deleted Successfully !", {
          position: toast.POSITION.TOP_CENTER
        });
      
      })
      .catch(e => {
          console.log(e.message)
          dispatch({
              type:Types.OFFERS_ERROR,
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