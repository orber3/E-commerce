import { USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_LOGOUT,USER_LOGIN_SUCCESS,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, USER_DETAILS_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_FAIL, USER_UPDATE_FAIL, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST } from "../CONSTANTS/UserConstants"
import axios from 'axios'




export const login = ( email , password) => async (dispatch) =>  {
    try { 
        dispatch({ 
            type:  USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'content-type': 'application/json'
            },
        }

            const {data } = await axios.post('/api/users/login' ,{email , password} , config)

            dispatch({ 
                type:  USER_LOGIN_SUCCESS,
                payload: data
            })

            localStorage.setItem('userInfo' , JSON.stringify(data))
    }catch(e) { 
        
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}

export const logout = () => (dispatch) => { 

    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGIN_LOGOUT})
}



export const register = (name ,  email , password) => async (dispatch) =>  {
    try { 
        dispatch({ 
            type:  USER_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'content-type': 'application/json'
            },
        }

            const {data } = await axios.post('/api/users/' ,{name, email , password} , config)

            dispatch({ 
                type:  USER_REGISTER_SUCCESS,
                payload: data
            })
            
            dispatch({ 
                type:  USER_LOGIN_SUCCESS,
                payload: data
            })

            localStorage.setItem('userInfo' , JSON.stringify(data))
    }catch(e) { 
        
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}


export const getUserDetails = (id) => async (dispatch,getState) =>  {
    try { 

        dispatch({ 
            type:  USER_DETAILS_REQUEST,
        })

        const {userLogin: {userInfo },  } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

            const {data } = await axios.get(`/api/users/${id}`  , config)

            dispatch({ 
                type:  USER_DETAILS_SUCCESS,
                payload: data
            })
            
    }catch(e) { 
        
            dispatch({
                type: USER_DETAILS_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}




export const updateUserProfile = (user) => async (dispatch,getState) =>  {
    try { 

        dispatch({ 
            type:  USER_UPDATE_REQUEST,
        })

        const {userLogin: {userInfo },  } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

            const {data } = await axios.put(`/api/users/profile`  ,user,  config)

            dispatch({ 
                type:  USER_UPDATE_SUCCESS,
                payload: data
            })
            
            dispatch({ 
                type:  USER_LOGIN_SUCCESS,
                payload: data
            })
            localStorage.setItem('userInfo' , JSON.stringify(data))

            
    }catch(e) { 
        
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}