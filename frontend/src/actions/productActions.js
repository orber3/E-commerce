import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS} from '../CONSTANTS/productConstans'
import {PRODUCT_LIST_FAIL ,PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../CONSTANTS/productConstans'
import axios from 'axios'

export const listProducts = () => async (dispatch) => { 

try { 
    dispatch({ type: PRODUCT_LIST_REQUEST})

    const {data } = await axios.get('/api/products')
    dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data
    })
}
 catch(e)
{
 dispatch({
     type: PRODUCT_LIST_FAIL,
     payload: e.response && e.response.data.message ? e.response.data.message : e.message
 })

}



}


export const listProductsDetail = (id) => async (dispatch) => { 

    try { 
        dispatch({ type: PRODUCT_DETAILS_REQUEST})
    
        const {data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
     catch(e)
    {
     dispatch({
         type: PRODUCT_DETAILS_FAIL,
         payload: e.response && e.response.data.message ? e.response.data.message : e.message
     })
    
    }
    
    
    
    }